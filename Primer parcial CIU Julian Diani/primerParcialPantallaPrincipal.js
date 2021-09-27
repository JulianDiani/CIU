let botonLogout=document.getElementById("botonLogout")
let nomUsuario=document.getElementById("nombreUser")


botonLogout.addEventListener("click",function(event){
    location.href="index.html"
})
const getUser = () => {
  return JSON.parse(localStorage.getItem("sesion")).usuario;
};
nomUsuario.textContent=getUser()



