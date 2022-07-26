import getShows from './getShows.js';
import thumbsUp from '../images/thumbsup.svg';
import commentImg from '../images/comment.svg';
import displayModal from './displayModal.js';
import addNewLike from './involvementAPI.js';

const displayScreen = async () => {
  const mostRatedShows = await getShows();
  const list = document.querySelector('.shows');
  mostRatedShows.forEach((show) => {
    const showCard = document.createElement('article');
    const img = document.createElement('img');
    img.src = show.image.medium;
    const name = document.createElement('h3');
    name.textContent = show.name;
    const like = document.createElement('img');
    like.src = thumbsUp;
    const commentBox = document.createElement('a');
    const comment = document.createElement('img');
    comment.src = commentImg;
    commentBox.addEventListener('click', () => {
      displayModal(show.id);
    });
    commentBox.appendChild(comment);
    showCard.append(img, name, like, commentBox);
    list.append(showCard);

    like.addEventListener('click', () => {
      addNewLike(show.id);
    });
  });
  // console.log(mostRatedShows);
};

export default displayScreen;
