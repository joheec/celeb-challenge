const initialState = {
  lastId: 0,
  cards: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_CARD': 
      return {
        lastId: state.lastId + 1,
        cards: [
          ...state.cards,
          {
            id: state.lastId + 1,
            name: payload.name,
            photo: payload.photo,
          }
        ]
      };
    case 'REMOVE_CARD':
      return {
        ...state,
        cards: state.cards.filter(card => card.id != payload),
      };
    default:
      return state;
  }
};
