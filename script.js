let navBar = document.getElementById('navBar');
window.onscroll = function(){
if (window.scrollY > 20){
    navBar.classList.add('navbar-shadow');
}
else{
    navBar.classList.remove('navbar-shadow');
}
}

let nav = document.getElementById('burgerMenu');
nav.addEventListener('click', function(){
nav.classList.toggle('is-active');
})

let menu = document.getElementById('menuSlide');
let toggleOpen = document.getElementById('burgerMenu');
let shadowBackground = document.getElementById('hamburgerBackground')

toggleOpen.addEventListener('click', toggleMenu);

function toggleMenu(){
    menu.classList.toggle('show-menu')
    shadowBackground.classList.toggle('hamburger-menu-container-active')
}

//Mail
const btn = document.getElementById('button');
let emailSent = document.getElementById('button');
let emailToggle = document.getElementById('emailSentToggle');
let formToggleHide = document.getElementById('formToggle');
let email = document.getElementById('email_id');
let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/*if (regex.test(email)) {

} else {
  console.log("La dirección de correo electrónico es inválida");
}*/

document.getElementById('form')


 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_f0q17ljk';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviado!';
      emailSent.classList.remove('contactar-input');
      emailSent.classList.add('contactar-success');
      emailToggle.classList.add('email-sent-toggle');
      emailToggle.classList.remove('email-sent')
      formToggleHide.classList.add('form-toggle-hide');
    }, (err) => {
      btn.value = 'Contactar!';
      alert(JSON.stringify(err));
    });
});