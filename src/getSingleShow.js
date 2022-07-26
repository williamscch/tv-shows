const getSingleShow = async (Id) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${Id}`);
  const jsonResponse = await response.json();
  return {
    name: jsonResponse.name,
    language: jsonResponse.language,
    status: jsonResponse.status,
    premiered: jsonResponse.premiered,
    ended: jsonResponse.ended,
    rating: jsonResponse.rating.average,
    image: jsonResponse.image.medium,
    summary: jsonResponse.summary,
  };
};

export default getSingleShow;
