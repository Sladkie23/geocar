<?php

    $conn = mysqli_connect('MySQL-8.2', 'root', '', 'car_base');

    if (!$conn) {
        echo "No connect";
    }