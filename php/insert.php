<?php

include_once('config.php');

$input = file_get_contents('php://input');
$decode = json_decode($input, true);

$firstName = $decode["fname"];
$lastName = $decode["lname"];
$city = $decode["city"];
$class = $decode["class"];

$sql = "INSERT INTO students(first_name, last_name, city, class) VALUES ('{$firstName}', '{$lastName}', '{$city}', '{$class}')";

$result = $conn->query($sql);

if($result) {
    echo json_encode(array('insert' => 'success'));
} else {
    echo json_encode(array('insert' => 'failed'));
}


$conn->close();
?>