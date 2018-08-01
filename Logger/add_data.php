<?php
    // Connect to MySQL
    include("connect.php");

    // Prepare the SQL statement
    $SQL = "INSERT INTO log (timestamp,current,temperature) VALUES ('"
                                                                    .$_GET["ts"]
                                                                    ."','"
                                                                    .$_GET["cur"]
                                                                    ."','"
                                                                    .$_GET["temp"]
                                                                    ."')";     

    // Execute SQL statement
    mysql_query($SQL);

    // Go to the review_data.php (optional)
    header("Location: index.php");
?>