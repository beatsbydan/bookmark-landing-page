const q1 = document.querySelector(".q1")
const q11 = document.querySelector("#q11")
const q2 = document.querySelector(".q2")
const q22 = document.querySelector("#q22")
const q3 = document.querySelector(".q3")
const q33 = document.querySelector("#q33")
const q4 = document.querySelector(".q4")
const q44 = document.querySelector("#q44")

const a1 = document.querySelector(".a1")
const a2 = document.querySelector(".a2")
const a3 = document.querySelector(".a3")
const a4 = document.querySelector(".a4")


const questionQ1 = document.getElementById("q1")
const questionQ11 = document.getElementById("q11")
const questionQ2 = document.getElementById("q2")
const questionQ22 = document.getElementById("q22")
const questionQ3 = document.getElementById("q3")
const questionQ33 = document.getElementById("q33")
const questionQ4 = document.getElementById("q4")
const questionQ44 = document.getElementById("q44")


questionQ1.addEventListener("click", () => {
    q1.classList.add("ques")
    a1.classList.add("ans")
    q11.classList.add("open")
})
questionQ11.addEventListener("click", () => {
    q1.classList.remove("ques")
    a1.classList.remove("ans")
    q11.classList.remove("open")
})

questionQ2.addEventListener("click", () => {
    q2.classList.add("ques")
    a2.classList.add("ans")
    q22.classList.add("open")
})
questionQ22.addEventListener("click", () => {
    q2.classList.remove("ques")
    a2.classList.remove("ans")
    q22.classList.remove("open")
})

questionQ3.addEventListener("click", () => {
    q3.classList.add("ques")
    a3.classList.add("ans")
    q33.classList.add("open")
})
questionQ33.addEventListener("click", () => {
    q3.classList.remove("ques")
    a3.classList.remove("ans")
    q33.classList.remove("open")
})

questionQ4.addEventListener("click", () => {
    q4.classList.add("ques")
    a4.classList.add("ans")
    q44.classList.add("open")
})
questionQ44.addEventListener("click", () => {
    q4.classList.remove("ques")
    a4.classList.remove("ans")
    q44.classList.remove("open")
})