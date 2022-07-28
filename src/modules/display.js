import getShows from './getShows.js';
import thumbsUp from '../images/thumbsup.svg';
import displayModal from './displayModal.js';
import { getNumberOfLikes, addNewLike } from './likes.js';
import showNumbers from './showNumber.js';

const displayScreen = async () => {
  const showsArray = await getShows();
  const likesAr = await getNumberOfLikes();
  const list = document.querySelector('.shows');
  list.innerHTML = '';
  showsArray.forEach((show) => {
    const showCard = document.createElement('article');
    const img = document.createElement('img');
    img.src = show.image.medium;
    const titleAndLikes = document.createElement('div');
    titleAndLikes.className = 'title-likes';
    const name = document.createElement('h3');
    name.textContent = show.name;
    const likeBox = document.createElement('div');
    likeBox.className = 'like-box';
    const likeNum = document.createElement('span');
    likeNum.textContent = likesAr.find((e) => e.item_id === show.id).likes;
    const like = document.createElement('img');
    like.src = thumbsUp;
    like.classList.add('like');
    const commentBox = document.createElement('a');
    commentBox.innerHTML = 'Comments';
    commentBox.addEventListener('click', () => {
      displayModal(show.id);
    });
    titleAndLikes.append(name, likeBox);
    likeBox.append(likeNum, like);
    showCard.append(img, titleAndLikes, commentBox);
    list.append(showCard);

    like.addEventListener('click', () => {
      addNewLike(show.id);
      let numberLikes = likeNum.textContent;
      numberLikes = parseInt(numberLikes, 10);
      numberLikes += 1;
      likeNum.textContent = numberLikes;
    });
  });
  const title = document.querySelector('.page-title');
  title.innerHTML = 'Shows';
  const numberHTML = document.querySelector('.shows-number');
  const showsNum = showNumbers();
  numberHTML.textContent = showsNum;
};

export default displayScreen;
