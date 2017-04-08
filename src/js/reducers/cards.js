export default (state = [], action) => {
	switch (action.type) {
		case 'ADD_CARD': 
			return [
				...state,
				{
					name: action.name,
					photo: action.photo
				}
			];
		default:
			return state;
	}
};
