const getPeople = async () => {
  const response = await fetch('https://api.tvmaze.com/people');
  const jsonResponse = await response.json();
  return jsonResponse.slice(0, 40);
};

export default getPeople;

