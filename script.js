let hamburger = document.querySelector(".hamburger")
let menu = document.querySelector(".menu")

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active")
    menu.classList.toggle("active")
})

let navLink = document.querySelectorAll(".navlink") 
navLink.forEach(n=>n.addEventListener("click",()=>{
    hamburger.classList.remove("active")
    menu.classList.remove("active")
}))