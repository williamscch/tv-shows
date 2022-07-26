const likesPath = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wTuKRCdWCi0TS2pluTow/likes';

const addNewLike = async (id) => {
  await fetch(likesPath,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
      }),
    }).then(async () => {
    const response = await fetch(likesPath);
    const data = await response.json();
    console.log(data);
  });
};

export default addNewLike;
