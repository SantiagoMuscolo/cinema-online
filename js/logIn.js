const btnIngresar = document.querySelector(`#button`),
user = document.querySelector(`#usuario`),
pass = document.querySelector(`#password`);
p = document.querySelector(`#texto`)

function inicioSesion(usuarios){
    let userFound = usuarios.find(usuario =>{
        return usuario.nombre === user.value && usuario.pass === pass.value
    });
    if(userFound){
        window.location.href = "../html/movies.html"
    }else{
        p.innerText = `el usuario no a coincidido`
    }
}

function recuperarLS(){
    let datos = JSON.parse(localStorage.getItem(`usuarios`));
    return datos;
}

const usuarioLS = recuperarLS();

btnIngresar.addEventListener(`click`, (e=>{
    e.preventDefault();
    inicioSesion(usuarioLS);
}))