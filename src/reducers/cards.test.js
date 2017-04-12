import test from 'ava';
import cardsReducer from './cards';
import { addCard } from '../actions/card';

test('cards reducer', (t) => {
  const actions = [addCard({ name: 'Ken', photo: 'poopybutthole.jpg' }), addCard({ name: 'Johee', photo: 'johee.jpg' })];
  const newState = actions.reduce(cardsReducer, undefined);
  t.deepEqual(newState, { lastId: 2, cards: [{ id: 1, name: 'Ken', photo: 'poopybutthole.jpg' }, { id: 2, name: 'Johee', photo: 'johee.jpg' }]});
});
