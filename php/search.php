<?php

include_once('config.php');

$search = $_GET['search'];

$query = "SELECT students.id, students.first_name, students.last_name,
students.city, class.class_name 
FROM students LEFT JOIN class ON class.cid = students.class 
WHERE concat(first_name, last_name) LIKE '%{$search}%'";

$result = $conn->query($query) or die("Query Failed");
$output = [];

if($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $output[] = $row;
    }
} else {
    $output['empty'] = ['empty'];
}


$conn->close();

echo json_encode($output);



?>