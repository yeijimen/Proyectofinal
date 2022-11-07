<?php
define("HOST", "localhost");
define("USER", "root");
define("PASS","");
define("DB", "usuarios"); //Base de datos para la conexion con los usuarios

function conexionBaseDatos(){
  $enlace = new mysqli(HOST, USER, PASS, DB);
  if($enlace->connect_error){
    $error = "Error de conexión ".$enlace->connect_errno
            ." Mensaje: ".$enlace->connect_error;
    die($error);
  }
  return $enlace;
}
?>