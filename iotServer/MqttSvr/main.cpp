#include <QCoreApplication>
#include <QSettings>

#include "MainServer.h"
#include "httplistener.h"

int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);

    QString configFileName = "etc/mqttserver.ini";

    // Load settings
    QSettings settings(configFileName, QSettings::IniFormat, &a);

    // Main Application
    MainServer* MyHandler = new MainServer(&a);
    MainServer::Singleton = MyHandler;

    // Session settings
    settings.beginGroup("sessions");
    MainServer::sessionStore = new HttpSessionStore(&settings, &a);
    settings.endGroup();

    settings.beginGroup("template");
    MainServer::tmpCache = new TemplateCache(&settings, &a);
    settings.endGroup();

    // HTTP listener settings
    settings.beginGroup("listener");
    new HttpListener(&settings, MyHandler, &a);
    settings.endGroup();

    return a.exec();
}
