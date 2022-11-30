
const bienvenida = () => {
    let ingresoNombre = prompt("ingresa tu nombre");

    while (ingresoNombre === null || ingresoNombre === ""){
        alert ("ingrese un nombre valido");
        ingresoNombre = prompt("ingresa nuevamente un nombre");
    }

    alert (`Hola ${ingresoNombre}, Bienvenido/a a peliculas online`);

    return ingresoNombre;
}

const edadPelicula = () => {
    let ingresoEdad = prompt("ingresa tu edad");
    while(ingresoEdad === ""){
        ingresoEdad = prompt("ingresa tu edad");
    }
    return ingresoEdad;
}

const seleccionPelicula = (edad) => {
    if (edad <= 17){
        let pelicula = prompt("Estas son nuestras recomendaciones para menores: \n 1-DragonBall \n 2-OnePiece \n 3-Bakugan \n 4-Los Piratas Del Caribe \n \n ingresa el numero de la pelicula que deseas ver");
        while(pelicula === null || pelicula === ""){
            pelicula = prompt("Estas son nuestras recomendaciones para menores: \n 1-DragonBall \n 2-OnePiece \n 3-Bakugan \n 4-Los Piratas Del Caribe \n \n ingresa el numero de la pelicula que deseas ver");
        }
        switch (pelicula) {
            case "1":
                alert("ingresaste DragonBall");
                return "dragon ball";

            case "2":
                alert("OnePiece");
                return "one piece";

            case "3":
                alert("ingresaste Bakugan");
                return "bakugan";

            case "4":
                alert("ingresaste Los Piratas Del Caribe");
                return "los piratas del caribe";
        }
    }else if (edad >= 18){
        let pelicula = prompt("Estas son nuestras recomendaciones para mayores: \n 1-Baby Driver \n 2-Sangre, sudor y gloria \n 3-Terrifier \n 4-Anabelle \n \n ingresa el numero de  la pelicula que deseas ver");
        while(pelicula === null || pelicula === ""){
            pelicula = prompt("Estas son nuestras recomendaciones para mayores: \n 1-Baby Driver \n 2-Sangre, sudor y gloria \n 3-Terrifier \n 4-Anabelle \n \n ingresa el numero de  la pelicula que deseas ver");
        }
        switch (pelicula) {
            case "1":
                alert("ingresaste Baby Driver");
                return "baby driver";
        
            case "2":
                alert("ingresaste Sangre, sudor y gloria");
                return "sangre, sudor y gloria";

            case "3":
                alert("ingresaste Terrifier");
                return "terrifier";

            case "4":
                alert("ingresaste Anabelle");
                return "anabelle";
        }
    }
}

const precioPelicula = (pelicula) => {
    if(pelicula === "dragon ball"){
        return 600;
    }else if (pelicula === "one piece"){
        return 600;
    }else if (pelicula === "bakugan"){
        return 600;
    }else if (pelicula === "los piratas del caribe"){
        return 600;
    }else if (pelicula === "baby driver"){
        return 1000;
    }else if (pelicula === "sangre, sudor y gloria"){
        return 1000;
    }else if (pelicula === "terrifier"){
        return 1000;
    }else if (pelicula === "anabelle"){
        return 1000;
    }
}

const cobro = (nombre, pelicula, precio) => {
        alert(`la pelicula que eligio es ${pelicula} y el costo de su entrada sera de ${precio} pesos`);
    let abonar = parseInt(prompt("con cuanto abonara?"));
    if(abonar > precio ){
        let resultado = abonar-precio;
        alert(`su vuelto es ${resultado}`);
    }else if(abonar < precio){
        alert("te pedimos disculpas pero tu presupuesto no es suficiente");
        return false;
    }
    alert("gracias por su visita, vuelva prontos.");
    }   


let nombre = bienvenida()
let edad = edadPelicula()
let pelicula = seleccionPelicula (edad)
let precio = precioPelicula(pelicula)
cobro(nombre, pelicula, precio)