import getShows from './getShows.js';

const showNumbers = async () => {
  const numberHTML = document.querySelector('.shows-number');
  const mostRatedShows = await getShows();
  let counter = 0;
  mostRatedShows.forEach(() => {
    counter += 1;
  });
  numberHTML.textContent = counter;
};

export default showNumbers;