const getComments = async (id) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wTuKRCdWCi0TS2pluTow/comments?item_id=${id}`,
  );
  const jsonResponse = await response.json();
  return jsonResponse;
};

export default getComments;
