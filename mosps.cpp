//Mosquitto Subscribe/Publish

#include <fcntl.h>
#include <cstdio>
#include <cstdlib>
#include <mosquitto.h>
#include <unistd.h>
#include <iostream>
#include <string>

using namespace std;

//Server Identities
#define HOST "broker.hivemq.com"
#define PORT 1883
#define TOPIC "tigaresiiot"

//Message Event
void messageArrived(struct mosquitto *m, void *obj, 
	const struct mosquitto_message *message){
	//Do command
	string msg = message->payload;
	cout << "Message: " << msg << endl;

	//Response for each command
	if (msg[0] == '*' && msg.size() > 1){
		if (msg[1] == 'd'){ //down temperature
			; //do sth
		} else if (msg[1] == 'u') { //up temperature
			; //do sth (lirc etc)
		} else if (msg[1] == '0') { //power off
			; //do sth
		} else if (msg[1] == '1') { //power on
			; //do sth
		} else if (msg[1] == 'r') { //read sensors
			; //do sth
		}
	}

	//Back response/acknowledge part
	string resp = "ABCDEX";
	int pub = mosquitto_publish(m, NULL, TOPIC, resp.size(), resp, 0, false);
	if (pub){
		cout << "Can't publish message\n";
		exit(-1);
	}
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