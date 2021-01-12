<?php
    include ('dbFunctions.php');
    $statistics = Array();
    
    $query = "SELECT * FROM statistics ORDER BY id";
    $result = mysqli_query($link, $query);
            
    while ($row = mysqli_fetch_array($result)){
        $statistics[] = $row;
    }
    
    echo json_encode($statistics);