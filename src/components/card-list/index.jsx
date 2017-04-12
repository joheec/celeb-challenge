import React from 'react';
import './style.scss';

export default (props) => {
  const cards = props.cards;
  const removeCard = props.removeCard;
  return(
    <div className='card-list'>
      {cards.map(card => 
        <div key={card.id} className='card'>
          <span className="close-button" onClick={() => removeCard(card.id)}>&#215;</span>
          <img src={card.photo} alt={card.name} /> 
          <span className="celeb-name">{card.name}</span>
        </div>
      )}
    </div>
  );
}
