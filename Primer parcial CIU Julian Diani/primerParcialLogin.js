let botonLogin=document.getElementById("botonLogin")
let error=document.getElementById("error")

botonLogin.addEventListener("click",function(event){
    usuario=document.getElementById("login").value
    contraseña=document.getElementById("contraseña").value
    const sesion = {
        usuario: usuario,
        contraseña: contraseña,
      };
    
      localStorage.setItem("sesion", JSON.stringify(sesion));
    if(validaUsuario(usuario) && validaContraseña(contraseña)){
        location.href="pantallaPrincipal.html"
    }
    else{
        error.style.display = "block";
        error.innerHTML = "Nombre de usuario y/o contraseña incorrectos";
    }
    
})

function validaUsuario(usuario) {
    return /^[0-9]+$/.test(usuario)
}
function validaContraseña(contraseña) {
    return /^.{4,}$/.test(contraseña)
}