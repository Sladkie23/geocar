<?php

$conn = mysqli_connect("MySQL-8.2", "root", "", "car_base");
if ($conn == false) {
    print("Ошибка подключения".mysqli_connect_error());
} else {
    print("Подключение успешно");
}
mysqli_set_charset($conn, 'utf8');

$data = "SELECT * FROM car_list";
$result = mysqli_query($conn, $data);


while($row = mysqli_fetch_array($result)) {
    print("Название".$row['name']."Год".$row['date']."Цена".$row['price']. '<br>');
}



mysqli_close($conn);