//Mosquitto Subscribe

#include <fcntl.h>
#include <cstdio>
#include <cstdlib>
#include <mosquitto.h>
#include <iostream>
#include <string>

using namespace std;

//Server Identities
#define HOST "broker.hivemq.com"
#define PORT 1883
#define TOPIC "tigaresiiot"

//Message Event
void messageArrived(struct mosquitto *m, 
					void *obj, 
					const struct mosquitto_message *message){
	cout << "Message: " << (string *) message->payload << endl;	
}

int main(int argc, char **argv){
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

	//Subscribe for messages
	int sub = mosquitto_subscribe(m, NULL, TOPIC, 0);
	if (sub){
		cout << "Cannot subscribe\n"
		exit(-1);
	}

	//Locate event handler
	mosquitto_message_callback_set(m, messageArrived);

	//Loop for getting messages
	mosquitto_loop_forever(m, -1, 1);

	//Exit if needed
	mosquitto_destroy(m);
	mosquitto_lib_cleanup();

	return 0;
}