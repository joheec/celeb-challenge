import test from 'ava';
import cards from './cards';

test('cards reducer', (t) => {
	const oldState = [];
	const actions = [{
		type: 'ADD_CARD',
		name: 'Johee',
		photo: 'johee.jpg',
	}, {
		type: 'ADD_CARD',
		name: 'Ken',
		photo: 'poopybutthole.jpg',
	}];
	const newState = actions.reduce(cards, oldState);
	t.deepEqual(newState, [{ name: 'Johee', photo: 'johee.jpg' }, { name: 'Ken', photo: 'poopybutthole.jpg' }]);
});
