<?php

include_once('config.php');

$sid = $_GET['vid'];

$query1 = "SELECT * FROM students WHERE id = {$sid}";
$result1 = $conn->query($query1) or die("Query Failed");
$output = [];

if($result1->num_rows > 0) {
    while($row1 = $result1->fetch_assoc()) {
        $output['response'][] = $row1;
    }
}

$query2 = "SELECT * FROM class"




?>