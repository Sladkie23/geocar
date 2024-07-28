<?php
$conn = mysqli_connect('MySQL-8.2', 'root', '', 'car_base');

$data = json_decode(file_get_contents('php://input'), true);


$photo1 = $data['photo1'];
$photo2 = $data['photo2'];
$photo3 = $data['photo3'];
$photo4 = $data['photo4'];
$name = $data['name'];
$year = $data['year'];
$engine = $data['engine'];
$price = $data['price'];


$query = "INSERT INTO car_list(photo1, photo2, photo3, photo4, name, year, engine, price)
          VALUES('$photo1', '$photo2', '$photo3', '$photo4', '$name', '$year', '$engine', '$price')";

$result = mysqli_query($conn, $query);

http_response_code('201');
header('Content-type: application/json');

mysqli_close($conn);


