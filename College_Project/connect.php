<?php
$bname = $_POST["bookName"];
$bcode = $_POST["bookCode"];
$name = $_POST["name"];
$email = $_POST["email"];
$Sdate = $_POST["sDate"];
$edate = $_POST["eDate"];

$conn = new mysqli('localhost', 'root1', 'root1', 'library_details');


if ($conn->connect_error) {
  echo "$conn->connect_error";
  die("Connection Failed: " . $conn->connect_error);
} else {

  $stmt = $conn->prepare("INSERT INTO data (B_Name, B_Code, Name, Email, sDate, eDate) VALUES ('?', ?, '?', '?', '?', '?')");

  $stmt->bind_param("ssssss", $bname, $bcode, $name, $email, $Sdate, $edate);

  $execval = $stmt->execute();
  if ($execval) {
    echo "Data inserted successfully!";
  } else {
    echo "Error: " . $stmt->error;
  }
  $stmt->close();
  $conn->close();
}
