//let menu = document.querySelector('#menu-icon');
//let navbar = document.querySelector('.navbar');

//menu.onclick =()=>{
//menu.classList.toggle('bx-x');
//menu.classList.toggle('open');
//}

const menu = document.querySelector("#menu-icon")
const navbar = document.querySelector(".navbar")

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
})