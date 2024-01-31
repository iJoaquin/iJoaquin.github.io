/*================= =================*/
const Menu_Icon = document.getElementById("menu-icon");
const Nav = document.getElementById("nav");

Menu_Icon.addEventListener("click", function () {
    Nav.classList.toggle("show");
});

/*================= =================*/
const Icono_GitHub = document.querySelector(".div_iconos .fa-github");
Icono_GitHub.addEventListener("click", function () {
    window.open("https://github.com/iJoaquin");
});

const Icono_Wsp = document.querySelector(".div_iconos .fa-whatsapp");
Icono_Wsp.addEventListener("click", function () {
    window.open("https://wa.me/51965209543");
});


/*=================  =================*/
const Proyecto1 = document.getElementById("proyecto1");
Proyecto1.addEventListener("click", function () {
    window.open("https://github.com/iJoaquin/clima-api");
});

const Proyecto2 = document.getElementById("proyecto2");
Proyecto2.addEventListener("click", function () {
    window.open("https://github.com/iJoaquin/buscador-img");
});

const Proyecto3 = document.getElementById("proyecto3");
Proyecto3.addEventListener("click", function () {
    window.open("https://github.com/iJoaquin/pokemon-api");
});
