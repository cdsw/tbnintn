#-------------------------------------------------
#
# Project created by QtCreator 2018-07-25T13:22:47
#
#-------------------------------------------------

QT       -= core gui

TARGET = mosquittoLib
TEMPLATE = lib
CONFIG += staticlib

DEFINES += QT_DEPRECATED_WARNINGS LIBMOSQUITTO_STATIC

SOURCES += \
    actions.c \
    callbacks.c \
    connect.c \
    handle_connack.c \
    handle_ping.c \
    handle_pubackcomp.c \
    handle_publish.c \
    handle_pubrec.c \
    handle_pubrel.c \
    handle_suback.c \
    handle_unsuback.c \
    helpers.c \
    logging_mosq.c \
    loop.c \
    memory_mosq.c \
    messages_mosq.c \
    mosquitto.c \
    net_mosq.c \
    options.c \
    packet_mosq.c \
    read_handle.c \
    send_connect.c \
    send_disconnect.c \
    send_mosq.c \
    send_publish.c \
    send_subscribe.c \
    send_unsubscribe.c \
    socks_mosq.c \
    srv_mosq.c \
    thread_mosq.c \
    time_mosq.c \
    tls_mosq.c \
    utf8_mosq.c \
    util_mosq.c \
    will_mosq.c

HEADERS += \
    dummypthread.h \
    logging_mosq.h \
    memory_mosq.h \
    messages_mosq.h \
    mosquitto_internal.h \
    mosquitto.h \
    mqtt3_protocol.h \
    net_mosq.h \
    packet_mosq.h \
    read_handle.h \
    send_mosq.h \
    socks_mosq.h \
    time_mosq.h \
    tls_mosq.h \
    util_mosq.h \
    will_mosq.h \
    config.h
