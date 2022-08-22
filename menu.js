const hamburger = document.getElementById("hamburger")
const hamb = document.querySelector(".hamburg")
const closed = document.getElementById("close")
const dropdown = document.querySelector(".dropdown")

hamburger.addEventListener("click", () => {
    dropdown.classList.add("active")
    hamb.classList.add("none")
})
closed.addEventListener("click", () => {
    dropdown.classList.remove("active")
    hamb.classList.remove("none")
})