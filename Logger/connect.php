<?php
$username_mysql = "id6526640_tbniot";  // enter your username for mysql
$password_mysql = "tbniot000";  // enter your password for mysql
$hostname_mysql = "localhost";      // this is usually "localhost" unless your database resides on a different server

$dbh = mysql_pconnect($hostname_mysql , $username_mysql, $password_mysql);
$selected = mysql_select_db("id6526640_table1",$dbh); //Enter your database name here 
?>