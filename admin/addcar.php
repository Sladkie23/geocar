<?php
$conn = mysqli_connect('MySQL-8.2', 'root', '', 'car_base');

$data = json_decode(file_get_contents('php://input'), true);


$name = $data['name'];
$date = $data['year'];
$price = $data['price'];


$query = "INSERT INTO car_list(name, date, price)
          VALUES('$name', '$date', '$price')";

$result = mysqli_query($conn, $query);

http_response_code('201');
header('Content-type: application/json');

mysqli_close($conn);


