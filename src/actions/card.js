export const addCard = payload => ({
  type: 'ADD_CARD',
  payload,
});

export const removeCard = id => ({
  type: 'REMOVE_CARD',
  payload: id,
});
