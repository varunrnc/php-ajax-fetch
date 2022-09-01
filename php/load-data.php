<?php
include_once('config.php');

$sql = "SELECT students.id, students.first_name, students.last_name, students.city, class.class_name FROM students LEFT JOIN class ON class.cid = students.class";

$result = $conn->query($sql) or die("Query Failed: " . $conn->error($sql));
$output = [];

if($result->num_rows > 0)
{
    while($row = $result->fetch_assoc())
    {
        $output[] = $row;
    }
} else {
    $output['empty'] = ['empty'];
}

$conn->close();

echo json_encode($output);



?>