<?php
$bname = $_GET["bookName"];
$bcode = $_GET["bookcode"];
$name = $_GET["name"];
$email = $_GET["email"];
$sdate = $_GET["sDate"];
$edate = $_GET["eDate"];

$success = null;
header('Content-Type: application/json');
$conn = mysqli_connect('localhost', 'root', '', 'library_details');
$query = "INSERT INTO data (B_Name, B_Code, Name, Email, sDate, eDate) VALUES ('{$bname}', {$bcode}, '{$name}', '{$email}', '{$sdate}', '{$edate}')";
$result = mysqli_query($conn, $query);
if($result)
{
  echo json_encode($result);
}
else{
  echo json_encode($result);
}
mysqli_close($conn);