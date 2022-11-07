<?php
  session_start();
  if(!isset($_SESSION['auth']) || $_SESSION['auth']==false){
    header("Location: index.php");
  }
  require_once './controladores/conexion.php';
?>
<!DOCTYPE html>

<html>
  <head>
    <meta charset="UTF-8">
    <title></title>
  </head>
  <body>
    <h1>Home</h1>
    <h2>Bienvenidos <?php echo $_SESSION['user']?></h2>
  </body>
</html>
