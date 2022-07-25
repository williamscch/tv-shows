import './style.css';
import tvlogo from '../images/tvlogo.png';

const getShows = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const JsonResponse = await response.json();
  const list = document.querySelector('ul');
  list.innerText = JsonResponse[1].name;
  list.append(JsonResponse[1].summary);
};

getShows();

const body = document.querySelector('body');
const imagelogo = document.createElement('img');
imagelogo.src = tvlogo;
body.appendChild(imagelogo);
