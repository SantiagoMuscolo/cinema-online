const img = document.querySelector(`#body`);

const backgrounds = [`avengers.jpg`, `cyberpunk.jpg`, `spiderman.jpg`];

function cambiarImagen(fondos){
    let random = Math.floor(Math.random() * fondos.length)
    img.setAttribute("src", `../imagenes/backgrounds/${backgrounds[random]}`);
    console.log(random);
}

window.onload = cambiarImagen(backgrounds)