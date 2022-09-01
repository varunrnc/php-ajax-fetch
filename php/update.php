<?php

include_once('config.php');

$input = file_get_contents('php://input');
$decode = json_decode($input, true);

$student_id = $decode["s_id"];
$firstName = $decode["fname"];
$lastName = $decode["lname"];
$class = $decode["class"];
$city = $decode["city"];

$query = "UPDATE students SET 
first_name = '{$firstName}', 
last_name = '{$lastName}', 
city = '{$city}', 
class = $class 
WHERE id = {$student_id}";

$result = $conn->query($query) or die("Query Failed!");

if($result) {
    echo json_encode(array('update' => 'success'));
} else {
    echo json_encode(array('update' => 'failed'));
}

//$conn->close();


?>