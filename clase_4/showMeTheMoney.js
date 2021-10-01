
let botones=document.querySelectorAll("button")


for(let i=0;i<botones.length;i++){
    botones[i].addEventListener("click",function(){
        this.querySelector("img").classList.toggle("oculto")

    })
}

