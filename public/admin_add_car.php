<?php

$dbc = mysqli_connect('os', 'root', '', 'car_base');

$data = json_decode(file_get_contents('php://input'), true);
$photo = $data['photo'];
$name = $data['name'];
$date = $data['date'];
$price = $data['price'];

$query = "INSERT INTO car_list (photo, name, date, price);
          VALUES('$photo', '$name', '$date', '$price')";

$result = mysqli_query($dbc, $query);

http_response_code('201');
header('Content-type: application/json');

mysqli_close($dbc);