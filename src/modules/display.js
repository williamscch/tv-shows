// eslint-disable-next-line import/no-cycle
import { getShows, list } from '../index.js';
import thumbsUp from '../../images/thumbsup.svg';
import commentImg from '../../images/comment.svg';

const displayScreen = async () => {
  const mostRatedShows = await getShows();
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
    commentBox.appendChild(comment);
    showCard.append(img, name, like, commentBox);
    list.append(showCard);
  });
};

export default displayScreen;