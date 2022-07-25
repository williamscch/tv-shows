import './style.css';
import tvLogo from '../images/tvlogo.png';

const getShows = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const JsonResponse = await response.json();
  const list = document.querySelector('.shows');
  list.innerText = JsonResponse[1].name;
  list.append(JsonResponse[1].summary);
};

getShows();

const navLogoContainer = document.querySelector('.logo');
const imageLogo = document.createElement('img');
imageLogo.classList.add('logo-nav');
imageLogo.src = tvLogo;
navLogoContainer.appendChild(imageLogo);
