#ifndef MAINSERVER_H
#define MAINSERVER_H

#include "httpconnectionhandler.h"
#include "httpsessionstore.h"
#include "templatecache.h"

#define LIBMOSQUITTO_STATIC
#include <mosquitto.h>

class MainServer : public HttpRequestHandler
{
    Q_OBJECT
public:
    MainServer(QObject* parent = NULL);
    ~MainServer();

    virtual void service(HttpRequest& request, HttpResponse& response);

    static HttpSessionStore* sessionStore;
    static TemplateCache* tmpCache;
    static MainServer* Singleton;

    void timerEvent(QTimerEvent* ev);

    struct mosquitto *m = nullptr;

    bool varPowerStat;
    double varTemperature;
    double varCurrent;
    double varTempPreset;
    double varTempPresetCmd;

private:

    int tmrMosquitto;
    int tmrServer;

    void mosquittoInit();
};

#endif // MAINSERVER_H
