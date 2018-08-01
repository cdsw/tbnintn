<?php 
    // Start MySQL Connection
    include('connect.php'); 
?>

<html>
<head>
    <title>TBNIOT</title>
</head>

    <body>
        <h1>TBN IoT Sensor Log</h1>

    <table border="0" cellspacing="0" cellpadding="4">
      <tr>
            <td><strong>Timestamp</strong></td>
            <td><strong>Current</strong></td>
            <td><strong>Temperature</strong></td>
          </tr>
<?php

    // Retrieve all records and display them
    $result = mysql_query("SELECT * FROM log ORDER BY TIMESTAMP DESC");

    // process every record
    while( $row = mysql_fetch_array($result) )
    {
        echo '<tr>';
        echo '   <td>'.$row["TIMESTAMP"].'</td>';
        echo '   <td>'.$row["CURRENT"].'</td>';
        echo '   <td>'.$row["TEMPERATURE"].'</td>';
        echo '</tr>';
    }
?>
    </table>
    </body>
</html>