<?php

$server = '127.0.0.1';
$user = 'root';
$password = '';
$db_name = 'phpajax';

$conn = new mysqli($server, $user, $password, $db_name);

if($conn->connect_error)
{
    die("Connection Failed: " . $conn->connect_error);
}
