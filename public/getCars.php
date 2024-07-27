<?php
    require_once "connect.php";
    
    $cars = mysqli_query($conn, "SELECT * FROM `car_list`");
    $cars = mysqli_fetch_all($cars);
    print_r(json_encode($cars));