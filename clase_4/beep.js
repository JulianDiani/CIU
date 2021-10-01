let boton=document.querySelector("button")

function beep () {

    boton.addEventListener("click",seEjecutaEnEvento)
}
let seEjecutaEnEvento= function(){
    document.querySelector("body").insertAdjacentHTML("beforeend", "<p>Beeep!</p>")
    document.querySelector("body").classList.toggle("color")
    
}
beep()
