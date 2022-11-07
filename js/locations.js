var mapa;

window.onload = function() {

    radios = document.getElementsByClassName("optionSelected");
    onClickFunction(radios);


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(userLocation, failedLocation);
    }else{
        alert("Error al mostrar la ubicación"); //En caso de que el navegador no soporte o no se acepte
    }


    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    navbar.style.zIndex = "10";

    window.onscroll = function() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    };
}

function failedLocation(){

    alert("Error al cargar la ubicacion");
}

function userLocation(position){

    var lat = position.coords.latitude; //Obtencion de las coordenadas del usuario
    var lng = position.coords.longitude;

    var mapObject = document.getElementById("mapa");
    var coordinates = new google.maps.LatLng(lat, lng);

    var mapOptions = {
        zoom: 13, 
        center: coordinates, 
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        zoomControl: true,      
        fullscreenControl: true,
        mapTypeControl: true,
    };

    mapa = new google.maps.Map(mapObject, mapOptions) //Declaracion de objeto tipo google.maps.Map(ubicacionPagina, opciones)

    var userMarkOptions = {
        position: coordinates,    //Ubicacion de la marca con las coordenadas del usuario
        map: mapa,  //mapa deseado para la ubicacion de la marca
        title: "Usuario",
        label: "U",
        icon: 'media/img/userMarker.png',
        animation: google.maps.Animation.BOUNCE,
    };

    var userMark = new google.maps.Marker(userMarkOptions); //Marca Usuario

    var gamersColombiaPints = [
        {lat: 6.214991, lng: -75.577159},
        {lat: 6.214916, lng: -75.576197},
        {lat: 6.213885, lng: -75.576320},
        {lat: 6.213709, lng: -75.576502},
        {lat: 6.213889, lng: -75.577341},
    ]

    var gamersColombiaPolygonOptions = {
        paths: gamersColombiaPints,
        strokeColor: "#47DD26",
        strokeOpacity: 0.8,
        strokeWeight: 1.5,

        fillColor: "#7AF060",
        fillOpacity: 0.3,
    }

    var gamersColombia = new google.maps.Polygon(gamersColombiaPolygonOptions);
    gamersColombia.setMap(mapa);

    gamersColombiaCoordinates = new google.maps.LatLng(6.214310, -75.576833);
    var gamersColombiaMarkOptions = {
        position: gamersColombiaCoordinates,    //Ubicacion de la marca con las coordenadas del usuario
        map: mapa,  //mapa deseado para la ubicacion de la marca
        title: "Gamers Colombia",
        label: "GC",
        animation: google.maps.Animation.DROP,
    };
    var gamersColombiaMark = new google.maps.Marker(gamersColombiaMarkOptions); //Anhadiendo marca


    var exitoColombiaPints = [
        {lat: 6.255101, lng: -75.583891},
        {lat: 6.254701, lng: -75.583003},
        {lat: 6.256504, lng: -75.582187},
        {lat: 6.256887, lng: -75.582997},
    ]

    var exitoColombiaPolygonOptions = {
        paths: exitoColombiaPints,
        strokeColor: "#47DD26",
        strokeOpacity: 0.8,
        strokeWeight: 1.5,

        fillColor: "#7AF060",
        fillOpacity: 0.3,
    }

    var exitoColombia = new google.maps.Polygon(exitoColombiaPolygonOptions);
    exitoColombia.setMap(mapa);

    exitoColombiaCoordinates = new google.maps.LatLng(6.255593, -75.583108);
    var exitoColombiaMarkOptions = {
        position: exitoColombiaCoordinates,    //Ubicacion de la marca con las coordenadas del usuario
        map: mapa,  //mapa deseado para la ubicacion de la marca
        title: "Exito Colombia",
        label: "EC",
        animation: google.maps.Animation.DROP,
    };
    var exitoColombiaMark = new google.maps.Marker(exitoColombiaMarkOptions); //Anhadiendo marca


    var exitoSAPoints = [
        {lat: 6.246229, lng: -75.566971},
        {lat: 6.246717, lng: -75.568176},
        {lat: 6.247483, lng: -75.567617},
        {lat: 6.246806, lng: -75.566547},
    ]

    var exitoSAPolygonOptions = {
        paths: exitoSAPoints,
        strokeColor: "#47DD26",
        strokeOpacity: 0.8,
        strokeWeight: 1.5,

        fillColor: "#7AF060",
        fillOpacity: 0.3,
    }

    var exitoSA = new google.maps.Polygon(exitoSAPolygonOptions);
    exitoSA.setMap(mapa);

    exitoSACoordinates = new google.maps.LatLng(6.246806, -75.567286);
    var exitoSAMarkOptions = {
        position: exitoSACoordinates,    //Ubicacion de la marca con las coordenadas del usuario
        map: mapa,  //mapa deseado para la ubicacion de la marca
        title: "Exito San Antonio",
        label: "ESA",
        animation: google.maps.Animation.DROP,
    };
    var exitoSAMark = new google.maps.Marker(exitoSAMarkOptions); //Anhadiendo marca

    var ktronixPoints = [
        {lat: 6.200957, lng: -75.572456},
        {lat: 6.200732, lng: -75.571940},
        {lat: 6.201318, lng: -75.571663},
        {lat: 6.201608, lng: -75.572178},
    ]

    var ktronixPolygonOptions = {
        paths: ktronixPoints,
        strokeColor: "#47DD26",
        strokeOpacity: 0.8,
        strokeWeight: 1.5,

        fillColor: "#7AF060",
        fillOpacity: 0.3,
    }

    var ktronix = new google.maps.Polygon(ktronixPolygonOptions);
    ktronix.setMap(mapa);

    ktronixCoordinates = new google.maps.LatLng(6.201082, -75.572223);
    var ktronixMarkOptions = {
        position: ktronixCoordinates,    //Ubicacion de la marca con las coordenadas del usuario
        map: mapa,  //mapa deseado para la ubicacion de la marca
        title: "Ktronix",
        label: "Kt",
        animation: google.maps.Animation.DROP,
    };
    var ktronixMark = new google.maps.Marker(ktronixMarkOptions); 


    gamersColombia.addListener('mouseover', showInfoGamersColombia);
    gamersColombia.addListener('mouseout', closeInfo);
    gamersColombia.addListener('dblclick', function (){
        window.location.href = "https://gamerscolombia.com/";
    });
    exitoSA.addListener('mouseover', showInfoExitoSA);
    exitoSA.addListener('mouseout', closeInfo);
    exitoSA.addListener('dblclick', function (){
        window.location.href = "https://www.exito.com/";
    });
    exitoColombia.addListener('mouseover', showInfoExitoColombia);
    exitoColombia.addListener('mouseout', closeInfo);
    exitoColombia.addListener('dblclick', function (){
        window.location.href = "https://www.exito.com/";
    });
    ktronix.addListener('mouseover', showInfoKtronix);
    ktronix.addListener('mouseout', closeInfo);
    ktronix.addListener('dblclick', function (){
        window.location.href = "https://www.ktronix.com/";
    });

}

//#############################################################
//###################### INFO WINDOWS #########################
//#############################################################

function showInfoGamersColombia(event){
    window.info =  new google.maps.InfoWindow;
    var contenido = "<div style='float:left; width:200px'><img src='media/img/GamersColombia.jpg' style= 'width:200px; height:200px;'></div> <div style='float:right; width: 300px; margin-left:5px;'><h1>Gamers Colombia</h1><p><strong>Dirección: </strong>Centro Comercial Monterrey Local 214, Carrera 48 #10-45, Medellín, Antioquia.<br><br><strong>Teléfono: </strong>(4) 3542742</p></div>";
    info.setContent(contenido);
    info.setPosition(event.latLng);
    info.open(mapa);
}

function showInfoExitoColombia(event){
    window.info =  new google.maps.InfoWindow;
    var contenido = "<div style='float:left; width:200px'><img src='media/img/grupo-exito.jpg' style= 'width:200px; height:200px;'></div> <div style='float:right; width: 300px; margin-left:5px;'><h1>Éxito Colombia</h1><p>Grupo Éxito es una empresa multinacional colombiana que realiza actividades de comercio al detal.<br><br><strong>Dirección: </strong>Carrera 66 #49-0<br><br><strong>Teléfono: </strong>(4) 430 6500</p></div>";
    info.setContent(contenido);
    info.setPosition(event.latLng);
    info.open(mapa);
}

function showInfoExitoSA(event){
    window.info =  new google.maps.InfoWindow;
    var contenido = "<div style='float:left; width:200px'><img src='media/img/grupo-exito2.jpeg' style= 'width:200px; height:200px;'></div> <div style='float:right; width: 300px; margin-left:5px;'><h1>Éxito San Antonio</h1><p>Grupo Éxito es una empresa multinacional colombiana que realiza actividades de comercio al detal.<br><br><strong>Dirección: </strong>Calle 48 #46-115<br><br><strong>Teléfono: </strong>(4) 251 0010</p></div>";
    info.setContent(contenido);
    info.setPosition(event.latLng);
    info.open(mapa);
}

function showInfoKtronix(event){
    window.info =  new google.maps.InfoWindow;
    var contenido = "<div style='float:left; width:200px'><img src='media/img/ktronix.jpg' style= 'width:200px; height:200px;'></div> <div style='float:right; width: 300px; margin-left:5px;'><h1>Ktronix</h1><p>Ktronix es una empresa colombiana, hoy día la tienda líder en tecnología. Puede elegir entre más de 1.600 referencias de electrodomésticos, tecnología y accesorios, todo bajo un mismo techo.<br><br><strong>Dirección: </strong>Carrera 43A #1Sur-220<br><br><strong>Teléfono: </strong>01-800-0111448</p></div>";
    info.setContent(contenido);
    info.setPosition(event.latLng);
    info.open(mapa);
}


function closeInfo(event){
    info.close();
}


//#############################################################
//#############################################################
//#############################################################

//Agregando el onclick a los radio buttons para cambios respectivos
function click(){

    //Obtencion de la lista donde se mostrara posteriormente las carreras
    carreras = document.getElementsByTagName("li"); 

    //Se evalua el caso de la opcion seleccionada por el usuario
    if(this.value == "gamersColombiaVal"){
        //Centrado del mapa en las coordenadas especificadas
        mapa.setCenter({
            lat: 6.214291, 
            lng: -75.576811
        });
    } else if(this.value == "ECVal"){
        mapa.setCenter({
            lat: 6.256026, 
            lng: -75.582925
        });
    } else if(this.value == "ESAVal"){
        mapa.setCenter({
            lat: 6.246854, 
            lng: -75.567296
        });
    } else if(this.value == "KtronixVal"){
        mapa.setCenter({
            lat: 6.201041, 
            lng: -75.572111
        });
    } 
}


function onClickFunction(radios){
    
    for(var i = 0; i < radios.length; i++){
        radios[i].onclick = click;
    }
}

