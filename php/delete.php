<?php

include_once('config.php');

$sid = $_GET['delId'];

$query = "DELETE FROM students WHERE id = {$sid}";

$result = $conn->query($query);

if($result) {
    echo json_encode(array('delete' => 'success'));
} else {
    echo json_encode((array('delete' => 'failed')));
}



?>