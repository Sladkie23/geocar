<?php
 $conn = mysqli_connect('MySQL-8.2', 'root', '', 'car_base');

if(!$conn) {
    die('Ошибка подключения к базе данных car_base');
}


