const getShows = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const JsonResponse = await response.json();
  const mostRatedShows = JsonResponse.filter(
    (show) => show.rating.average > 8.5,
  );
  return mostRatedShows;
};

export default getShows;
