const getNumberOfComments = () => {
  const lis = document.querySelectorAll('.comments li');
  return lis.length;
};

export default getNumberOfComments;
