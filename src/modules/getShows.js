const getShows = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const JsonResponse = await response.json();
  const genreTitle = document.querySelector('.genre');
  const inputAll = document.getElementById('all');
  const inputBest = document.getElementById('best');
  const inputDrama = document.getElementById('drama');
  const inputAction = document.getElementById('action');
  const inputAdventure = document.getElementById('adventure');
  const inputFantasy = document.getElementById('fantasy');
  const inputComedy = document.getElementById('comedy');
  const inputMystery = document.getElementById('mystery');
  const inputHorror = document.getElementById('horror');
  const inputRomance = document.getElementById('romance');
  const inputCrime = document.getElementById('crime');
  const inputThriller = document.getElementById('thriller');
  const inputSiFy = document.getElementById('science-fiction');

  if (inputBest.checked) {
    genreTitle.textContent = 'Best Rated';
    const mostRatedShows = JsonResponse.filter(
      (show) => show.rating.average > 8.3,
    );
    return mostRatedShows;
  } if (inputDrama.checked) {
    genreTitle.textContent = 'Drama';
    const dramaShows = [];
    JsonResponse.forEach((element) => {
      if (element.genres.includes('Drama')) {
        dramaShows.push(element);
      }
    });
    return dramaShows;
  } if (inputAction.checked) {
    const actionShows = [];
    genreTitle.textContent = 'Action';
    JsonResponse.forEach((element) => {
      if (element.genres.includes('Action')) {
        actionShows.push(element);
      }
    });
    return actionShows;
  } if (inputAdventure.checked) {
    const adventureShows = [];
    genreTitle.textContent = 'Adventure';
    JsonResponse.forEach((element) => {
      if (element.genres.includes('Adventure')) {
        adventureShows.push(element);
      }
    });
    return adventureShows;
  } if (inputFantasy.checked) {
    genreTitle.textContent = 'Fantasy';
    const fantasyShows = [];
    JsonResponse.forEach((element) => {
      if (element.genres.includes('Fantasy')) {
        fantasyShows.push(element);
      }
    });
    return fantasyShows;
  } if (inputComedy.checked) {
    const comedyShows = [];
    genreTitle.textContent = 'Comedy';
    JsonResponse.forEach((element) => {
      if (element.genres.includes('Comedy')) {
        comedyShows.push(element);
      }
    });
    return comedyShows;
  } if (inputRomance.checked) {
    const romanceShows = [];
    genreTitle.textContent = 'Romance';
    JsonResponse.forEach((element) => {
      if (element.genres.includes('Romance')) {
        romanceShows.push(element);
      }
    });
    return romanceShows;
  } if (inputMystery.checked) {
    const mysteryShows = [];
    genreTitle.textContent = 'Mystery';
    JsonResponse.forEach((element) => {
      if (element.genres.includes('Mystery')) {
        mysteryShows.push(element);
      }
    });
    return mysteryShows;
  } if (inputHorror.checked) {
    const horrorShows = [];
    genreTitle.textContent = 'Horror';
    JsonResponse.forEach((element) => {
      if (element.genres.includes('Horror')) {
        horrorShows.push(element);
      }
    });
    return horrorShows;
  } if (inputCrime.checked) {
    genreTitle.textContent = 'Crime';
    const crimeShows = [];
    JsonResponse.forEach((element) => {
      if (element.genres.includes('Crime')) {
        crimeShows.push(element);
      }
    });
    return crimeShows;
  } if (inputThriller.checked) {
    genreTitle.textContent = 'Thriller';
    const thrillerShows = [];
    JsonResponse.forEach((element) => {
      if (element.genres.includes('Thriller')) {
        thrillerShows.push(element);
      }
    });
    return thrillerShows;
  } if (inputSiFy.checked) {
    const siFyShows = [];
    genreTitle.textContent = 'Science-Fiction';
    JsonResponse.forEach((element) => {
      if (element.genres.includes('Science-Fiction')) {
        siFyShows.push(element);
      }
    });
    return siFyShows;
  } if (inputAll.checked) {
    genreTitle.textContent = 'All';
    return JsonResponse;
  } return JsonResponse;
};

export default getShows;
