const btnIngresar = document.querySelector(`#button`),
user = document.querySelector(`#usuario`),
pass = document.querySelector(`#password`);
p = document.querySelector(`#texto`)

function inicioSesion(usuarios){
    console.log(usuarios);
    let userFound = usuarios.find(usuario =>{
        console.log(usuario);
        return usuario.usuario == user.value && usuario.password == pass.value
    });
    if(userFound){
        window.location.href = "./movies.html"
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