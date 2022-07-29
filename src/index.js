import './style.css';
import tvLogo from './images/tvlogo.png';
import displayScreen from './modules/display.js';
import displayPeople from './modules/displayPeople.js';

const navLogoContainer = document.querySelector('.logo');
const imageLogo = document.createElement('img');
const showsNav = document.querySelector('.showsnav');
const peopleNav = document.querySelector('.peoplenav');
const form = document.querySelectorAll('input');

imageLogo.classList.add('logo-nav');
imageLogo.src = tvLogo;
navLogoContainer.appendChild(imageLogo);

displayScreen();

showsNav.addEventListener('click', displayScreen);

peopleNav.addEventListener('click', displayPeople);

form.forEach((element) => {
  element.addEventListener('click', () => {
    const shows = document.querySelector('.shows');
    shows.innerHTML = null;
    displayScreen();
  });
});
