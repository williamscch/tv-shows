import './style.css';

const getShows = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const JsonResponse = await response.json();
  const body = document.querySelector('body');
  body.innerText = JsonResponse[1].name;
  body.append(JsonResponse[1].summary);
};

getShows();
