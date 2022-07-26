import './style.css';
import tvLogo from '../images/tvlogo.png';
// eslint-disable-next-line import/no-cycle
import displayScreen from './modules/display.js';

const list = document.querySelector('.shows');

const getShows = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const JsonResponse = await response.json();
  const mostRatedShows = JsonResponse.filter((show) => show.rating.average > 8.5);
  return mostRatedShows;
};

const navLogoContainer = document.querySelector('.logo');
const imageLogo = document.createElement('img');
imageLogo.classList.add('logo-nav');
imageLogo.src = tvLogo;
navLogoContainer.appendChild(imageLogo);

displayScreen();

export { getShows, list };
