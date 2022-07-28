const likesPath =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fiOKr3U1AEZOjJWCu9Sh/likes';

const getNumberOfLikesPeople = async () => {
  const response = await fetch(likesPath);
  const data = await response.json();
  return data;
};

const addNewLikePeople = async (id) => {
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

export { getNumberOfLikesPeople, addNewLikePeople };

