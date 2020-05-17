//Hamburger menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.dropdown');

hambutton.addEventListener('click', 
() => {mainnav.classList.toggle('responsive')}, false);

