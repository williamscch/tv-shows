import getPeople from './getPeople.js';
import { addNewLikePeople, getNumberOfLikesPeople } from './likesPeople.js';
import thumbsUp from '../images/thumbsup.svg';
import showNumbers from './showNumber.js';
import emptyProfile from '../images/empty-profile.jpg';

const displayPeople = async () => {
  const peopleArray = await getPeople();
  const likesArPeople = await getNumberOfLikesPeople();
  const list = document.querySelector('.shows');
  list.innerHTML = '';
  peopleArray.forEach((person) => {
    const personCard = document.createElement('article');
    const img = document.createElement('img');
    img.src = person.image?.medium ?? emptyProfile;
    const titleAndLikes = document.createElement('div');
    titleAndLikes.className = 'title-likes';
    const name = document.createElement('h3');
    name.textContent = person.name;
    const likeBox = document.createElement('div');
    likeBox.className = 'like-box';
    const likeNum = document.createElement('span');
    likeNum.textContent =
      likesArPeople.find((e) => e.item_id === person.id)?.likes ?? 0;
    const like = document.createElement('img');
    like.src = thumbsUp;
    // const commentBox = document.createElement('a');
    // commentBox.innerHTML = 'Comments';
    // commentBox.addEventListener('click', () => {
    //   displayModal(person.id);
    // });
    titleAndLikes.append(name, likeBox);
    likeBox.append(likeNum, like);
    personCard.append(img, titleAndLikes);
    list.append(personCard);

    like.addEventListener('click', () => {
      addNewLikePeople(person.id);
      let numberLikes = likeNum.textContent;
      numberLikes = parseInt(numberLikes, 10);
      numberLikes += 1;
      likeNum.textContent = numberLikes;
    });
  });
  const title = document.querySelector('.title h1');
  title.innerHTML = 'People';
  const numberHTML = document.querySelector('.shows-number');
  const showsNum = showNumbers();
  numberHTML.textContent = showsNum;
};

export default displayPeople;

