<!DOCTYPE html>
<html lang="es">
<head>
    <title>Mundo Gamer</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/png" href="icons/clipboard.png">

    <link rel="stylesheet" href="css/headerFooter.css">
    <link rel="stylesheet" href="css/login.css">
    <script type="text/javascript" src="js/headerFooter.js"></script>
</head>

<body>
    
    <section class="Bar"><a href="login.php">Ingresar</a><a href="register.php">Registrarse</a></section>
    <header>
        <a href="index.html"><img src="media/img/Logo1.png" onmouseover="this.src='media/img/Logo2.png'" onmouseout="this.src='media/img/Logo1.png'"></a></a>
    </header>
    <nav id="navbar">
        <ul>
            <li><a href="index.php" class="active">Inicio</a></li>
            <li><a href="index.php">Multimedia</a></li>
            <li><a href="index.php">E-Sports</a></li>
            <li><a href="index.php">Reviews</a></li>
            <li><a href="locations.php">Tiendas</a></li>
        </ul>
    </nav>

    <main>
        <div class="container">
            <h1>Inicio de sesión</h1>
            <form method="POST" action="controladores/sesion.php">
                <table>
                    <tr>
                        <td><input type="text" name="user" placeholder="Usuario" required></td>
                    </tr>
                    <tr>
                        <td><input type="password" name="pass" placeholder="Contraseña" required></td>
                    </tr>
                    <tr>
                        <td><input type="submit" value="Iniciar sesión" id="login"></td>
                    </tr>
                </table>
            </form>
            <div class="alert">
                <?php
                if(isset($_GET['error']) && $_GET['error']==true){
                    echo "<h4>Usuario o contraseña inválido</h4>";
                }
                ?>
            </div>
            
        </div>
    </main>


</body>
</html>