export const addCard = data => {
  const payload = data.photo === "" ? {...data, photo: "../components/card-list/default.png"} : data;
  return {
    type: 'ADD_CARD',
    payload,
  }
};

export const removeCard = id => ({
  type: 'REMOVE_CARD',
  payload: id,
});
