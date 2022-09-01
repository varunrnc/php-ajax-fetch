<?php
include_once('config.php');

$sql = "SELECT * FROM class";

$result = $conn->query($sql) or die("Query Failed:");
$output = [];

if($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $output[] = $row;
    }
} else {
    return false;
}

$conn->close();

echo json_encode($output);



?>