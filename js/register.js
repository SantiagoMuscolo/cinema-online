const nombre = document.querySelector(`#nombre`),
usuarioReg = document.querySelector(`#usuario`),
email = document.querySelector(`#email`),
passReg = document.querySelector(`#password`),
btnRegister = document.querySelector(`#button`);


let usuarios;

// if(localStorage.getItem(`usuarios`)){
//     usuarios = JSON.parse(localStorage.getItem(`usuarios`));
// }else{
//     usuarios = [];
// }
localStorage.getItem(`usuarios`) ? usuarios = JSON.parse(localStorage.getItem(`usuarios`)) : usuarios = [];

class usuario{
    constructor(nombre, usuario, email, password){
        this.nombre = nombre;
        this.usuario = usuario;
        this.email = email;
        this.password = password ;
    }
}

function limpiarCampos (){
    nombre.value = "";
    userReg.value = "";
    email.value = "";
    passwordReg.value = "";
    btnRegister.value = "";
}

function guardarUsuario(usuario){
    return usuarios.push(usuario)
}

function guardarEnElStorage(elemento){
    return localStorage.setItem(`usuarios`, JSON.stringify(elemento));
}

btnRegister.addEventListener(`click`, (e=>{
    e.preventDefault();
    
    let nuevoUsuario = new usuario(nombre.value, usuarioReg.value, email.value, passReg.value);
    console.log(nuevoUsuario);
    guardarUsuario(nuevoUsuario);
    guardarEnElStorage(usuarios);
    window.location.href = "../html/logIn.html"
}))


