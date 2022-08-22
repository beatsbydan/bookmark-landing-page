const Regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const email = document.getElementById("email")
var inputClass = document.querySelector(".in")
var msgClass = document.querySelector(".msg")
var errorClass = document.querySelector(".error")

email.addEventListener("input", () => {
    if(email.value.match(Regex)){
        inputClass.classList.remove("display")
        msgClass.classList.remove("apt")
        errorClass.classList.remove("active")
        email.style.borderColor = "green"
    }
    else{
        inputClass.classList.add("display")
        msgClass.classList.add("apt")
        errorClass.classList.add("active")
        email.style.borderColor = "transparent"
    }
})

window.addEventListener("click", () => {
    inputClass.classList.remove("display")
    msgClass.classList.remove("apt")
    errorClass.classList.remove("active")
    email.style.borderColor = "transparent"
    email.value = "";
})