//Mosquitto Publish

#include <fcntl.h>
#include <cstdio>
#include <unistd.h>
#include <cstdlib>
#include <mosquitto.h>
#include <iostream>
#include <string>

using namespace std;

//Server Identities
#define HOST "broker.hivemq.com"
#define PORT 1883
#define TOPIC "tigaresiiot"

int main (int argc, char **argv){
	struct mosquitto *m = NULL;
	//Mosquitto library initialization
	mosquitto_lib_init();
    //Client initialization (NULL = random)
	m = mosquitto_new(NULL, true, NULL);
	if (!m){
		cout << "Can't initialize Mosquitto\n";
		exit(-1);
	}

	//Connect to server
	int conn = mosquitto_connect(m, HOST, PORT, 0);
	if (conn){
		cout << "Can't connect to server\n";
		exit(-1);
	}

	//Publish the message
	string msg = argv[1];
	int pub = mosquitto_publish(m, NULL, TOPIC, msg.size(), msg, 0, false);
	if (pub){
		cout << "Can't publish message\n";
		exit(-1);
	}

	//Sleep to avoid OS problem
	sleep(1);

	//Exit
	mosquitto_disconnect(m);
	mosquitto_destroy(m);
	mosquitto_lib_cleanup();

	return 0;
}