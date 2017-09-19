<?php
  header('Content-type: application/json; charset=utf-8');

  $pdo = createPDO();

  $no = $_GET['no'];

  if($_GET['mode'] == "select"){
    $sql = "SELECT * FROM student WHERE no = $no";

    $stt = $pdo->prepare($sql);
    $stt->execute();

    $student = $stt->fetch(PDO::FETCH_ASSOC);

    $array_data = [];
    $array_data['no'] = urlencode($student['no']);
    $array_data['name'] = urlencode($student['name']);
    $array_data['student_no'] = urlencode($student['student_no']);
    $array_data['dept'] = urlencode($student['dept']);
    $array_data['date'] = urlencode($student['date']);

    echo $_GET['callback']."(".json_encode($array_data).")";
  }else if($_GET['mode'] == "update"){
    $student_no = $_GET['student_no'];
    $name = $_GET['name'];
    $dept = $_GET['dept'];
    $date = $_GET['date'];

    $sql = "UPDATE student SET name='$name', student_no=$student_no, dept='$dept',
    date='$date' WHERE no=$no";

    $stt = $pdo->prepare($sql);
    $stt->execute();
  }

  function createPDO(){
    $hostname = "localhost";
    $dbname = "idcard";
    $user = "root";
    $pass = "";

    try {
      $pdo = new PDO("mysql:host=$hostname;dbname=$dbname", $user, $pass);

      return $pdo;
    } catch (Exception $e) {
      print $e;
    }
  }
?>
