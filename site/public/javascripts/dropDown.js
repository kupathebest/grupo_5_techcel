const toggle = document.querySelector(".toggle")
const menuDesplegable = document.querySelector(".menu-desplegable")

toggle.addEventListener("click", () => {
menuDesplegable.classList.toggle("menu-desplegable_visible")
})

