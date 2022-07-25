import "./style.css";

const getShows = async () => {
  const response = await fetch("https://api.tvmaze.com/shows");
  const JsonResponse = await response.json();
  console.log(JsonResponse[1].name);
  console.log(JsonResponse[1].summary);
};

getShows();
