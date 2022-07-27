import './style.css';
import tvLogo from './images/tvlogo.png';
import displayScreen from './modules/display.js';
import showNumbers from './modules/showNumber.js';

const navLogoContainer = document.querySelector('.logo');
const imageLogo = document.createElement('img');
imageLogo.classList.add('logo-nav');
imageLogo.src = tvLogo;
navLogoContainer.appendChild(imageLogo);

showNumbers();
displayScreen();
