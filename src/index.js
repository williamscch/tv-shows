import './style.css';
import tvLogo from './images/tvlogo.png';
import displayScreen from './modules/display.js';
import displayPeople from './modules/displayPeople.js';

const navLogoContainer = document.querySelector('.logo');
const imageLogo = document.createElement('img');
imageLogo.classList.add('logo-nav');
imageLogo.src = tvLogo;
navLogoContainer.appendChild(imageLogo);

displayScreen();

const showsNav = document.querySelector('.showsnav');
showsNav.addEventListener('click', displayScreen);

const peopleNav = document.querySelector('.peoplenav');
peopleNav.addEventListener('click', displayPeople);
