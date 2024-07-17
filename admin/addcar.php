<?php
require_once '../config/connect.php';

$data = json_decode(file_get_contents('php://input'), true);

$photo = $data['photo'];
$name = $data['name'];
$date = $data['date'];
$price = $data['price'];

$query = "INSERT INTO car_list(photo, name, date, price)
          VALUES('$photo','$name','$date','$price')";


