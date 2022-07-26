import getShows from './getShows.js';
import thumbsUp from '../images/thumbsup.svg';
import commentImg from '../images/comment.svg';
import displayModal from './displayModal.js';
import { getNumberOfLikes, addNewLike } from './likes.js';

const displayScreen = async () => {
  const mostRatedShows = await getShows();
  const likesAr = await getNumberOfLikes();
  const list = document.querySelector('.shows');
  mostRatedShows.forEach((show) => {
    const showCard = document.createElement('article');
    const img = document.createElement('img');
    img.src = show.image.medium;
    const name = document.createElement('h3');
    name.textContent = show.name;
    const likeBox = document.createElement('div');
    const likeNum = document.createElement('span');
    likeNum.textContent = likesAr.find((e) => e.item_id === show.id).likes;
    const like = document.createElement('img');
    like.src = thumbsUp;
    const commentBox = document.createElement('a');
    const comment = document.createElement('img');
    comment.src = commentImg;
    commentBox.addEventListener('click', () => {
      displayModal(show.id);
    });
    likeBox.append(likeNum, like);
    commentBox.appendChild(comment);
    showCard.append(img, name, likeBox, commentBox);
    list.append(showCard);

    like.addEventListener('click', () => {
      addNewLike(show.id);
      // eslint-disable-next-line no-plusplus
      likeNum.textContent++;
    });
  });
};

export default displayScreen;
