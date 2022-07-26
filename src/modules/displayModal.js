import iconx from '../images/closeicon.svg';
import getSingleShow from './getSingleShow.js';
<<<<<<< HEAD
import getComments from './getComments.js';
=======
>>>>>>> origin/add-likes

const displayModal = async (id) => {
  const modal = id;
  const {
    name, language, status, premiered, ended, rating, image, summary,
  } = await getSingleShow(modal);

  const body = document.querySelector('body');

  const popupBackground = document.createElement('div');
  popupBackground.className = 'popup-background';
  body.appendChild(popupBackground);

  const popup = document.createElement('div');
  popup.className = 'popup';
  popupBackground.appendChild(popup);

  const iconxModal = document.createElement('img');
  iconxModal.src = iconx;
  iconxModal.className = 'iconx-modal';
  iconxModal.addEventListener('click', () => {
    body.removeChild(popupBackground);
  });
  popup.appendChild(iconxModal);

  const showImage = document.createElement('img');
  showImage.src = image;
  showImage.className = 'show-image';
  popup.appendChild(showImage);

  const modaltitle = document.createElement('h2');
  modaltitle.innerText = name;
  popup.appendChild(modaltitle);

  const details = document.createElement('ul');
  details.className = 'details';
  const arr1 = [
    '<b>Language: </b>',
    '<b>Premiered: </b>',
    '<b>Rating: </b>',
    '<b>Status: </b>',
    '<b>Ended: </b>',
  ];
  const arr2 = [language, premiered, rating, status, ended];
  for (let i = 0; i < arr1.length; i += 1) {
    const li = document.createElement('li');
    li.innerHTML = arr1[i] + arr2[i];
    details.appendChild(li);
  }
  popup.appendChild(details);

  const description = document.createElement('div');
  description.innerHTML = summary;
  description.className = 'description';
  popup.appendChild(description);

  const comments = await getComments(id);

  const commentsTitle = document.createElement('h3');
  commentsTitle.innerHTML = 'Comments';
  popup.appendChild(commentsTitle);

  const commentsList = document.createElement('ul');
  commentsList.className = 'comments';
  for (let i = 0; i < comments.length; i += 1) {
    const li = document.createElement('li');
    li.innerText = `${comments[i].creation_date} ${comments[i].username}: ${comments[i].comment}`;
    commentsList.appendChild(li);
  }
  popup.appendChild(commentsList);
};

export default displayModal;
