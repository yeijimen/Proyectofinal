<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/png" href="icons/placeholder.png">
    <title>Mundo Gamer | Tiendas</title>

    <link rel="stylesheet" href="css/headerFooter.css">
    <link rel="stylesheet" href="css/locations.css">
    <!--<script type="text/javascript" src="js/headerFooter.js"></script>-->
    <script type="text/javascript" src="js/locations.js"></script>
    <script src="http://maps.google.com/maps/api/js?sensor=true"></script> <!--Mapas de Google-->
    <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"></script>
</head>

<body>

    <div class="Bar"><a href="login.php">Ingresar</a><a href="register.php">Registrarse</a></div>
    <header>
        <a href="index.html"><img src="media/img/Logo1.png" onmouseover="this.src='media/img/Logo2.png'" onmouseout="this.src='media/img/Logo1.png'"></a></a>
    </header>
    <nav id="navbar">
        <ul>
            <li><a href="index.php">Inicio</a></li>
            <li><a href="multimedia.html">Multimedia</a></li>
            <li><a href="locations.php" class="active">Tiendas</a></li>
        </ul>
    </nav>

    <main>
        <section class="intro">
            <h1>Tiendas de Interés</h1>
            <p>Actualmente los Gamers son de gran importancia para muchas marcas, a un punto tal de que las mismas diseñan todo tipo de 
                productos enfocados en este mercado. Dichos productos son puestos en el mercado con la finalidad de llamar la atención de 
                los mismos, ya sea con sus materiales, especifícaciones, accesorios o llamativos diseños. En el siguiente mapa le 
                presentamos una selección de tiendas en las cuales  podrá encontrar todo tipo de productos para jugadores; desde aquellos 
                que utilizan consolas, hasta los que prefieren un equipo de escritorio para jugar sus partidasd, dichas tiendas se ilustran 
                por medio de un mapa que le permitirá observar directamente la ubicación de la misma. De igual manera, también se muestra una 
                recopilación de productos destacados ofrecidos por diferentes distribuidores, de forma tal que usted tendrá a a la mano un grupo 
                de productos cuidadosamente seleccionados. </p>

                <table>
                    <tr>
                        <td><img src="media/img/asus_64.png" alt="Asus"></td><td><img src="media/img/acer_64.png" alt="Acer"></td><td><img src="media/img/hp_64.png" alt="HP"></td><td><img src="media/img/lenovo_64.png" alt="Lenovo"></td><td><img src="media/img/amd_64.png" alt="AMD"></td>
                    </tr>
                    <tr>
                        <td><img src="media/img/PS_64.png" alt="PS"></td><td><img src="media/img/xbox_64.png" alt="Xbox"></td><td><img src="media/img/intel_64.png" alt="Intel"></td><td><img src="media/img/nvidia_64.png" alt="Nvidia"></td><td><img src="media/img/microsoft_64.png" alt="microsoft"></td>
                    </tr>
                    <tr>
                        <td><img src="media/img/sony_64.png" alt="Sony"></td><td><img src="media/img/nintendo_64.png" alt="Switch"></td><td><img src="media/img/logitech_64.png" alt="Logitech"></td><td><img src="media/img/apple_64.png" alt="Apple"></td><td><img src="media/img/android_64.png" alt="Android"></td>
                    </tr>
                </table>
        </section>

        <aside>
            <h3>Últimos Lanzamientos</h3>
            <article>
                <a href="https://ghost-recon.ubisoft.com/game/en-us/breakpoint"><img src="media/img/lanzamiento1.PNG" alt="GhostRecon"></a>
                <p><a href="https://ghost-recon.ubisoft.com/game/en-us/breakpoint">Ghost Recon Breakpoint</a><br><label>04 Octubre</label><br><label>Plataformas: PC, PS4, Xbox One</label></p>
            </article>
            <div class="clear"></div>
            <article>
                <a href="https://wwe.2k.com/"><img src="media/img/lanzamiento2.PNG" alt="WWE"></a>
                <p><a href="https://wwe.2k.com/">WWE 2K20</a><br><label>22 Octubre</label><br><label>Plataformas: PC, PS4, Xbox One</label></p>
            </article>
            <div class="clear"></div>
            <article>
                <a href="https://www.playstation.com/es-co/games/death-stranding-ps4/"><img src="media/img/lanzamiento3.PNG" alt="Stranding"></a>
                <p><a href="https://www.playstation.com/es-co/games/death-stranding-ps4/">Death Stranding</a><br><label>08 Noviembre</label><br><label>Plataformas: PS4</label></p>
            </article>
            <div class="clear"></div>
            <article>
                <a href="https://www.ea.com/es-es/games/need-for-speed/need-for-speed-heat"><img src="media/img/lanzamiento4.PNG" alt="Stranding"></a>
                <p><a href="https://www.ea.com/es-es/games/need-for-speed/need-for-speed-heat">Need for Speed Heat</a><br><label>08 Noviembre</label><br><label>Plataformas: PC, PS4, Xbox One</label></p>
            </article>
            <div class="clear"></div>

        </aside>

        <section class="selection">
            <h3>Visualización de tiendas</h3>
            <table>
                <tr>
                    <th class="first">Seleccione Tienda de Interés</th>
                </tr>
                <tr>
                    <td>
                        <!--<input type="radio" name="U" value="gamersColombiaVal" class="radio">Gamers Colombia<br>
                        <input type="radio" name="U" value="ECVal" class="radio">Éxito Colombia<br>
                        <input type="radio" name="U" value="ESAVal" class="radio">Éxito San Antonio<br>
                        <input type="radio" name="U" value="KtronixVal" class="radio">Ktronix<br>-->
                        <ul>
                            <li class="impar"><a class="optionSelected" href="#mapa">Gamers Colombia</a></li>
                            <li class="par"><a class="optionSelected" href="#mapa">Éxito Colombia</a></li>
                            <li class="impar"><a class="optionSelected" href="#mapa">Éxito San Antonio</a></li>
                            <li class="par"><a class="optionSelected" href="#mapa">Ktronix</a></li>
                        </ul>
                    </td>
                </tr>
            </table>
        </section>

        <div class="clear"></div>

    </main>

    <div id="mapa"></div>
</body>
</html>