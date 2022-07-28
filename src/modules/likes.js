const likesPath = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wTuKRCdWCi0TS2pluTow/likes';

const getNumberOfLikes = async () => {
  const response = await fetch(likesPath);
  const data = await response.json();
  return data;
};

const addNewLike = async (id) => {
  await fetch(likesPath, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
};

export { getNumberOfLikes, addNewLike };
