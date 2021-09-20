function beep () {

    document.querySelector("button").addEventListener("click", function(){
        document.querySelector("body").insertAdjacentHTML("beforeend", "<p>Beeep!</p>")
    })
}