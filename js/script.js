let searchBtn = document.querySelector('header .icons .fa-search');
let searchBar = document.querySelector('header form');
let menuBtn = document.querySelector('header #menu');
let navBar = document.querySelector('header .navbar');

window.onscroll = () => {
    searchBar.classList.remove('active');
    navBar.classList.remove('active');
}

searchBtn.addEventListener('click', () => {
    searchBar.classList.toggle('active');
});

menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
});

