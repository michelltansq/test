<?php
    include ('dbFunctions.php');
    $statistics = Array();
    $id = $_GET['id'];
    $query = "SELECT * FROM statistics WHERE id=$id";
    $result = mysqli_query($link, $query);
            
    while ($row = mysqli_fetch_array($result)){
        $statistics[] = $row;
    }
    
    echo json_encode($statistics);