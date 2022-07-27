const addComment = async (id, username, comment) => {
  await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wTuKRCdWCi0TS2pluTow/comments',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
        username,
        comment,
      }),
    },
  );
};

export default addComment;
