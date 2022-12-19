
const peliculasMenores = [{id: 1, nombre:"DragonBall", precio: 600, categoria: 'menor'}, {id: 2,nombre: "OnePiece", precio: 600, }, {id: 3,nombre: "Bakugan", precio: 600 , categoria: 'menor'}, {id: 4, nombre: "Los Piratas Del Caribe", precio: 600 , categoria: 'menor'}];

const peliculasMayores = [{id: 5, nombre: "Baby Driver", precio: 1000, categoria: 'mayor'}, {id: 6,nombre: "Sangre, Sudor y Gloria", precio: 1000, categoria: 'mayor'}, {id: 7,nombre: "Terrifier", precio: 1000, categoria: 'mayor'}, {id: 8,nombre: "Anabelle", precio: 1000, categoria: 'mayor'}];

const bienvenida = () => {
    let ingresoNombre = prompt("ingresa tu nombre");

    while (ingresoNombre === null || ingresoNombre === "") {
        alert("ingrese un nombre valido");
        ingresoNombre = prompt("ingresa nuevamente un nombre");
    }

    alert(`Hola ${ingresoNombre}, Bienvenido/a a peliculas online`);

    return ingresoNombre;
}

const edadPelicula = () => {
    let ingresoEdad = parseInt(prompt("ingresa tu edad"));
    while (isNaN(ingresoEdad)) {
        ingresoEdad = parseInt(prompt("ingresa tu edad"));
    }
    return ingresoEdad;
}

const seleccionPelicula = (edad) => {
    if (edad <= 17) {
        let pelicula = parseInt(prompt("Estas son nuestras recomendaciones para menores: \n 1-DragonBall \n 2-OnePiece \n 3-Bakugan \n 4-Los Piratas Del Caribe \n \n ingresa el numero de la pelicula que deseas ver"));
        const filtradoMenores = peliculasMenores.find((el) => {
            return el.id === pelicula;
        })
        alert(`Elegiste la pelicula: ${filtradoMenores.nombre}`);

    while (isNaN(pelicula)) {
        pelicula = parseInt(prompt("Estas son nuestras recomendaciones para menores: \n 1-DragonBall \n 2-OnePiece \n 3-Bakugan \n 4-Los Piratas Del Caribe \n \n ingresa el numero de la pelicula que deseas ver"));
    }

    return filtradoMenores;
    
}else if (edad >= 18) {
    let pelicula = parseInt(prompt("Estas son nuestras recomendaciones para mayores: \n 5-Baby Driver \n 6-Sangre, sudor y gloria \n 7-Terrifier \n 8-Anabelle \n \n ingresa el numero de  la pelicula que deseas ver"));

    const filtradoMayores = peliculasMayores.find((el) => {
        return el.id === pelicula;
    })

    alert(`Elegiste la pelicula: ${filtradoMayores.nombre}`);

    while (isNaN(pelicula)) {
        pelicula = parseInt(prompt("Estas son nuestras recomendaciones para mayores: \n 5-Baby Driver \n 6-Sangre, sudor y gloria \n 7-Terrifier \n 8-Anabelle \n \n ingresa el numero de  la pelicula que deseas ver"));
    }

    return filtradoMayores;
}
}

const cobro = (pelicula) => {
    alert(`la pelicula que eligio es ${pelicula.nombre} y el costo de su entrada sera de ${pelicula.precio} pesos`);
    let abonar = parseInt(prompt("con cuanto abonara?"));
    while (isNaN(abonar) || abonar <= 0) {
        abonar = parseInt(prompt("con cuanto abonara?"));
    }
    if (abonar > pelicula.precio) {
        let resultado = abonar - pelicula.precio;
        alert(`su vuelto es ${resultado}`);
    } else if (abonar < pelicula.precio) {
        alert("te pedimos disculpas pero tu presupuesto no es suficiente");
        return false;
    }
    alert("gracias por su visita, vuelva prontos.");
}


let nombre = bienvenida()
let edad = edadPelicula()
let pelicula = seleccionPelicula(edad)
cobro(pelicula)