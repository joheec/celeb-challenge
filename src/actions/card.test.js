import test from 'ava';
import {
  addCard,
  removeCard,
} from './card';

test('create ADD_CARD action', (t) => {
  const action = addCard({ name: 'Ken', photo: 'foo.jpg' });
  t.deepEqual(action, { type: 'ADD_CARD', payload: { name: 'Ken', photo: 'foo.jpg' } });
});

test('create REMOVE_CARD action', (t) => {
  const action = removeCard(0);
  t.deepEqual(action, { type: 'REMOVE_CARD', payload: 0 });
});
