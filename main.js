gsap.to(".titulo", {opacity: 1, duration: 2});

let datos = [
{
    producto: "Iron Lamp",
    caracteristicas : "",
    precio: "89,99€",
    img:"./img.1.webp",
}, 

{
    producto: "BEVELED WOODEN TABLE",
    caracteristicas : "",
    precio: "79,99€",
    img: "./img.2.webp",
}, 

{
    producto: "TASSELLED CUSHION COVER",
    caracteristicas : "",
    precio: "9,99€",
    img: "./img.3.webp",
}, 

{
   
    producto: "BIALETTI AUTOMATIC MILK FROTHER",
    caracteristicas : "",
    precio: "79.99€",
    img: "./img.4.webp",
}, 
];

 datos.forEach(dato =>{
    let cards = document.querySelector('#cards');

    let cols = document.createElement('div');

    cols.classList.add("col-12,", "col-md-3","d-flex","justify-content-center");
    cols.innerHTML =`

    <div class="card text-center" style="width: 18rem;">
        <img src=${dato.img} class= "img__card" alt="Card image cap">
        <div class="card-body d-flex flex-column justify-content-around">
        <h5 class="card-title">${dato.producto}</h5>
        <p class="~${dato.caracteristicas}></p>
        <h6 class="card-title ">${dato.precio}</h6><br>
        <a href="#" class="btn btn-dark text-white my-3">Buy now</a>
         </div>
    </div>
    `
    cards.appendChild(cols);

 });

//  Login
let login = document.querySelector('#toggleLogin');
 login.addEventListener('click', () =>{
  let = loginSide = document.querySelector('#loginSide');
  loginSide.classList.add('active_login');
 });

 let exitLogin = document.querySelector('#exitLogin');
 exitLogin.addEventListener('click', () =>{
    let = loginSide = document.querySelector('#loginSide');
    loginSide.classList.remove('active_login');
   });

//    Register
let register = document.querySelector('#toggleRegister');
  register.addEventListener('click', () =>{
   let = registerSide = document.querySelector('#registerSide');
   registerSide.classList.add('active_login');
 });

 let exitRegister = document.querySelector('#exitRegister');
  exitRegister.addEventListener('click', () =>{
    let = loginSide = document.querySelector('#registerSide');
    registerSide.classList.remove('active_login');
});

 