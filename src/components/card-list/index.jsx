import React from 'react';
import Card from './card';
import './style.scss';

export default ({ cards, removeCard }) => (
  <div className='card-list'>
    {cards.slice().reverse().map(card => 
      <Card key={card.id} card={card} removeCard={removeCard}/>
    )}
  </div>
);
