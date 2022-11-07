<?php
require_once './conexion.php';

function comprobarUsuario(){
  $mysql = conexionBaseDatos();
  $consulta = "SELECT * FROM usuarios WHERE user='".$_POST['user']."' AND pass='".$_POST['pass']."'";
  if($Usuarios = $mysql->query($consulta)){
    if(mysqli_num_rows($Usuarios)!=0){
      echo $consulta." OK<br>";
      session_start();
      $_SESSION['user'] = $_POST['user'];
      $_SESSION['auth'] = true;
      header("Location: ../home.php");
    }else{
      echo $consulta." No resultados<br>";
      header("Location: ../login.php?error=true");
    }    
  }else{
    echo $consulta." FAIL<br>";
    header("Location: ../index.php?error=true");
  }
  
}

comprobarUsuario();

?>