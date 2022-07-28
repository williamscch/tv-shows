import './style.css';
import tvLogo from './images/tvlogo.png';
import displayScreen from './modules/display.js';

const navLogoContainer = document.querySelector('.logo');
const imageLogo = document.createElement('img');
imageLogo.classList.add('logo-nav');
imageLogo.src = tvLogo;
navLogoContainer.appendChild(imageLogo);

displayScreen();

const form = document.querySelectorAll('input');

form.forEach((element) => {
  element.addEventListener('click', () => {
    const shows = document.querySelector('.shows');
    shows.innerHTML = null;
    displayScreen();
  });
});
