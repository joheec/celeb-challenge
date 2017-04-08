import test from 'ava';
import { cardsReducer } from './store';

test('cards reducer', (t) => {
	const oldState = {};
	const actions = [{
		type: 'ADD_CARD',
		name: 'Johee',
		photo: 'johee.jpg',
	}, {
		type: 'ADD_CARD',
		name: 'Ken',
		photo: 'poopybutthole.jpg',
	}];
	const newState = actions.reduce(cardsReducer);
	t.deepEqual([{ name: 'Johee', photo: 'johee.jpg' }, { name: 'Ken', photo: 'poopybutthole.jpg' }]);
});
