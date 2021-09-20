let boton=document.getElementById("botonIngresar")
let error=document.getElementById("error")

boton.addEventListener('click', function(event) {
    usuario = document.getElementById("usuario").value;
    contraseña = document.getElementById("contraseña").value


    if (validaUsuario(usuario) && validaContraseña(contraseña)) {

        location.href = 'pantallaPrincipal.html'
    } else {
        document.getElementById("error")
        error.innerHTML = "Usuario y/o contraseña incorrectos!"
    }
})
function validaUsuario(usuario) {
    return /^\d{8}$/.test(usuario)
}
function validaContraseña(contraseña) {
    tieneLetras = false
    tieneNumeros = false
    caracterIncorrecto= false
    if (contraseña.length > 5) {
        for (var i = 0; i < contraseña.length; i++) {
            codigo = contraseña.charCodeAt(i)
            if ((codigo >= 65 && codigo <= 90) || (codigo >= 97 && codigo <= 122)) {
                tieneLetras = true;
            } else if (contraseña.charCodeAt(i) >= 48 && contraseña.charCodeAt(i) <= 57)
            {
                tieneNumeros = true;
            } else {
                 caracterIncorrecto= true;
            }
        }
    }

    return !caracterIncorrecto && tieneLetras && tieneNumeros

}