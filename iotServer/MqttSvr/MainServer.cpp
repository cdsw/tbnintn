#include "MainServer.h"

#include <QFile>
#include <QTimerEvent>
#include "template.h"

//Server Identities
#define HOST "broker.hivemq.com"
#define PORT 1883
#define TOPIC "tigaresiiot"

HttpSessionStore* MainServer::sessionStore = nullptr;
TemplateCache* MainServer::tmpCache = nullptr;
MainServer* MainServer::Singleton = nullptr;

void messageArrived(struct mosquitto *m, void *obj,
                    const struct mosquitto_message *message)
{
    Q_UNUSED(m);
    Q_UNUSED(obj);

    //Do command
    char msg[10];
    strcpy(msg, static_cast<char*>(message->payload));

    QByteArray rcv;
    char* ptr = static_cast<char*>(message->payload);
    for(int i=0; i<message->payloadlen; i++)
    {
        rcv.append(quint8(*ptr++));
    }

    QByteArrayList vals = rcv.split(';');
    if(vals[0] == "DD")
    {
        bool ok;
        if(vals.length() > 0)
            MainServer::Singleton->varPowerStat = vals[1] == "ON" ? true : false;
        if(vals.length() > 1)
            MainServer::Singleton->varTemperature = vals[2].toDouble(&ok);
        if(vals.length() > 2)
            MainServer::Singleton->varTempPreset = vals[3].toDouble(&ok);
        if(vals.length() > 3)
            MainServer::Singleton->varCurrent = vals[4].toDouble(&ok);

        if(MainServer::Singleton->varTempPresetCmd == -100)
            MainServer::Singleton->varTempPresetCmd = MainServer::Singleton->varTempPreset;
    }

    qDebug() << "<==" << rcv;
}

MainServer::MainServer(QObject* parent)
    : HttpRequestHandler(parent)
{
    qDebug() << "Main Server created";

    varTemperature = 0;
    varCurrent = 0;
    varTempPreset = 0;
    varTempPresetCmd = -100;

    mosquittoInit();

    tmrMosquitto = startTimer(5000, Qt::CoarseTimer);

    tmrServer = startTimer(1000, Qt::CoarseTimer);
}

MainServer::~MainServer()
{
    mosquitto_loop_stop(m, true);
    mosquitto_destroy(m);
    mosquitto_lib_cleanup();
}

void MainServer::mosquittoInit()
{
    qDebug() << "Mosquitto Initialization";

    //Mosquitto library initialization
    mosquitto_lib_init();

    //Client initialization (NULL = random)
    m = mosquitto_new(nullptr, true, nullptr);
    if (!m)
    {
        qDebug() << "Can't initialize Mosquitto";
        return;
    }
    qDebug() << "Mosquitto initialized.";

    //Connect to server
    int conn = mosquitto_connect(m, HOST, PORT, 0);
    if (conn)
    {
        qDebug() << "Can't connect to server";
        return;
    }
    qDebug() << "Mosquitto connected " << HOST << PORT;

    //Subscribe for messages
    int sub = mosquitto_subscribe(m, nullptr, TOPIC, 0);
    if (sub)
    {
        qDebug() << "Cannot subscribe" << TOPIC;
        return;
    }
    qDebug() << "Topic subscribed" << TOPIC;

    //Locate event handler
    mosquitto_message_callback_set(m, messageArrived);

    mosquitto_loop_start(m);
}

void MainServer::timerEvent(QTimerEvent* ev)
{
    if(ev->timerId() == tmrMosquitto)
    {
        //place sthh
        QByteArray req;

        req.append("SS;r;").append(QByteArray::number(static_cast<int>(varTempPresetCmd)));

        mosquitto_subscribe(m, nullptr, req.constData(), 0);

        int pub = mosquitto_publish(m, nullptr, TOPIC, req.length(), req.constData(), 0, false);
        if (pub)
        {
            qDebug() << "Can't publish message";
            return;
        }
        qDebug() << "==>" << req.constData();
    }
    else if(ev->timerId() == tmrServer)
    {

    }
}

void MainServer::service(HttpRequest &request, HttpResponse &response)
{
    QString path = request.getPath();
    qDebug() << "[HtSvr] URI:" << path << "Method" << request.getMethod();

    response.setHeader("Access-Control-Allow-Origin", "*");

    HttpSession session = MainServer::sessionStore->getSession(request, response, true);

    qDebug() << "[HtSvr] Session" << session.getId();

    if(path == "/")
    {
        QFile f("etc/web/main.html.tpl");
        if(f.exists())
        {
            QByteArray language = request.getHeader("Accept-Language");
            Template tmp = tmpCache->getTemplate("web/main.html", language);
            tmp.setVariable("sessId", session.getId());
            response.write(tmp.toUtf8(), true);
        }
        else
        {
            response.write("<html><body>page not found !</body></html>", true);
        }
    }
    else if(path == "/cmdRead")
    {
        QByteArray r;

        r.append("readValue = {");
        r.append("'varPowerStat':").append(varPowerStat ? "'ON'" : "'OFF'").append(",");
        r.append("'varTemperature':").append("'" + QByteArray::number(varTemperature) + "'").append(",");
        r.append("'varTempPreset':").append("'" + QByteArray::number(varTempPreset) + "'").append(",");
        r.append("'varCurrent':").append("'" +QByteArray::number(varCurrent) + "'");
        r.append("}");

        response.write(r, true);
    }
    else if(path == "/cmdBtnUp")
    {
        if(varTempPresetCmd != -100)
            varTempPresetCmd += 1;
        qDebug() << "[HtSvr] Got Command cmdBtnUp" << varTempPreset;
        response.write("", true);
    }
    else if(path == "/cmdBtnDn")
    {
        if(varTempPresetCmd != -100)
            varTempPresetCmd -= 1;
        qDebug() << "[HtSvr] Got Command cmdBtnDn";
        response.write("", true);
    }
    else if(path == "/cmdBtnOn")
    {
        qDebug() << "[HtSvr] Got Command cmdBtnOn";
        response.write("", true);

        QByteArray req;

        req.append("SS;ON;").append(QByteArray::number(static_cast<int>(varTempPresetCmd)));

        mosquitto_subscribe(m, nullptr, req.constData(), 0);

        int pub = mosquitto_publish(m, nullptr, TOPIC, req.length(), req.constData(), 0, false);
        if (pub)
        {
            qDebug() << "Can't publish message";
            return;
        }
        qDebug() << "==>" << req.constData();
    }
    else if(path == "/cmdBtnOff")
    {
        qDebug() << "[HtSvr] Got Command cmdBtnOn";
        response.write("", true);

        QByteArray req;

        req.append("SS;OFF;").append(QByteArray::number(static_cast<int>(varTempPresetCmd)));

        mosquitto_subscribe(m, nullptr, req.constData(), 0);

        int pub = mosquitto_publish(m, nullptr, TOPIC, req.length(), req.constData(), 0, false);
        if (pub)
        {
            qDebug() << "Can't publish message";
            return;
        }
        qDebug() << "==>" << req.constData();
    }
}
