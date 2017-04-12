import React from 'react';
import './style.scss';

export default (props) => {
  const cards = props.cards;
  const removeCard = props.removeCard;
  const defaultPhoto = "components/card-list/close.png";
  return(
    <div className='card-list'>
      {cards.map(card => 
        <div key={card.id} className='card'>
          <img src={defaultPhoto} className="close-button" onClick={() => removeCard(card.id)}></img>
          <img src={card.photo} alt={card.name} className="celeb-photo" /> 
          <span className="celeb-name">{card.name}</span>
        </div>
      )}
    </div>
  );
}
