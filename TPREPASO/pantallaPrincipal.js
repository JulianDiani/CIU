let nuevaSoli=document.getElementById("nuevaSolicitud")
let misSoli=document.getElementById("misSolicitudes")
let irAlForo=document.getElementById("foro")
let cerrarSesion=document.getElementById("logout")

cerrarSesion.addEventListener("click",function(event){
    location.href="login.html"
})
misSoli.addEventListener("click",function(event){
    location.href="misSolicitudes.html"
})
irAlForo.addEventListener("click",function(event){
    location.href="solisFake.html"
})
nuevaSoli.addEventListener("click",function(event){
    location.href="solisFake.html"
})

