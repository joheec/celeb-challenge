import test from 'ava';
import cardsReducer from './cards';
import { addCard, removeCard } from '../actions/card';

test('cards reducer', (t) => {
  const actions = [addCard({ name: 'Ken', photo: 'poopybutthole.jpg' }), addCard({ name: 'Johee', photo: 'johee.jpg' }), removeCard(1)];
  const newState = actions.reduce(cardsReducer, undefined);
  t.deepEqual(newState, { lastId: 2, cards: [{ id: 2, name: 'Johee', photo: 'johee.jpg' }]});
});
