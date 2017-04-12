import React from 'react';
import './style.scss';

export default (props) => {
  const cards = props.cards;
  const removeCard = props.removeCard;
  return(
    <div className='card-list'>
      {cards.map(card => 
        <div key={card.id} className='card'>
          <button className="close-button" onClick={() => removeCard(card.id)}>x</button>
          <img src={card.photo} alt={card.name} height="42" width="42"/> 
          <span>{card.name}</span>
        </div>
      )}
    </div>
  );
}
