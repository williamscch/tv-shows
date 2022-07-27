const showNumbers = () => {
  const numberHTML = document.querySelector('.shows-number');
  const showsNum = document.querySelectorAll('article');
  numberHTML.textContent = showsNum.length;
};

export default showNumbers;