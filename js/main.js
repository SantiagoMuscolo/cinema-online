
const peliculas = [
    { nombre: "Dragon Ball", descripcion: "Su trama describe las aventuras de Gokū, un guerrero saiyajin, experto en artes marciales que en su infancia inicia sus viajes y aventuras en las que pone a prueba y mejora sus habilidades de pelea, enfrentando oponentes y protegiendo a la Tierra", img: "https://es.web.img3.acsta.net/pictures/18/12/18/13/00/2556818.jpg" },
    { nombre: "One Piece", descripcion: "One Piece es la historia de un chico llamado Monkey D. Luffy, quién se inspiró en Shanks, un pirata que le salvó la vida, para convertirse en el Rey de los Piratas. Al comienzo de la serie, veinticuatro años antes de la historia actual, un pirata llamado Gol D.", img: "https://es.web.img2.acsta.net/pictures/19/10/28/17/02/4637907.jpg" },
    { nombre: "Bakugan", descripcion: "anime bajo la dirección de Mitsuo Hashimoto, un juego de cartas estratégico creado por Sega Toys y Spin Master usando naipes metálicos. La historia se centra en las vidas de unas criaturas llamadas Bakugan y los peleadores que las dominan.", img: "https://pics.filmaffinity.com/bakugan_battle_planet-873833528-large.jpg" },
    { nombre: "Los Piratas Del Caribe", descripcion: "El pirata Jack Sparrow (Johnny Depp) intenta recuperar su barco, La Perla Negra, y vengarse del traidor Barbossa (Geoffrey Rush), quien se amotinó y le dejó abandonado en un islote desierto, viviendo mulitples aventuras junto a su tripulacion.", img: "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas/piratas-del-caribe-la-venganza-de-salazar/119544770-3-esl-ES/Piratas-del-Caribe-La-venganza-de-Salazar.jpg?resize=320:*" },
    { nombre: "Baby Driver", descripcion: "Para saldar su deuda con un mafioso, un joven con problemas de audición hace de conductor en atracos. Cuando por fin cree que se ha librado de su compromiso y pretende rehacer su vida, se ve obligado a retornar para un último golpe. ", img: "https://pics.filmaffinity.com/Baby_Driver-399368582-large.jpg" },
    { nombre: "Sangre, Sudor y Gloria", descripcion: "Mark Wahlberg y Dwayne Johnson, planean el secuestro de un rico empresario. En el transcurso de la operación creen que han matado a su víctima, pero no es así. el empresario contrata a un detective privado para que localice a sus captores.", img: "https://pics.filmaffinity.com/Sangre_sudor_y_gloria-382155306-large.jpg" },
    { nombre: "Terrifier", descripcion: "El payaso psicópata Art aterroriza a dos chicas durante la noche de Halloween, matando a todos aquellos que se interponen en su camino, es un thriller de horror y suspenso que te dejara sin aliento y palabras mientras mas te adentres en el.", img: "https://pics.filmaffinity.com/Terrifier-643530005-large.jpg" },
    { nombre: "Anabelle", descripcion: "John Form encuentra el regalo perfecto para Mia, su mujer embarazada: una preciosa muñeca 'vintage' llamada Annabelle. una secta satánica les ataca brutalmente. provocan que un ente maligno se apodere de Annabelle buscando este influir terror en sus victimas.", img: "https://www.ecartelera.com/carteles/7900/7931/002_m.jpg" }
];

const contenedor = document.getElementById(`container`)
peliculas.forEach((movies) => {
    let card = document.createElement(`div`)
    card.classList.add(`card`)
    card.innerHTML =
        `<div class="card" style="width: 18rem;">
            <img src="${movies.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${movies.nombre}</h5>
                    <p class="card-text">${movies.descripcion}</p>
                    <a href="#" class="btn btn-primary">get your ticket</a>
                </div>
        </div>`
    contenedor.appendChild(card);
})