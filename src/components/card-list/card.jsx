import React from 'react';
import { compose, pure, withHandlers } from 'recompose';
import closeButton from './close.png';

const Card = ({ card, remove }) => {
  return (
    <div className='card'>
     <img src={closeButton} className="close-button" onClick={remove}></img>
     <img src={card.photo} alt={card.name} className="celeb-photo" /> 
     <span className="celeb-name">{card.name}</span>
    </div>
  );
};

export default compose(pure, withHandlers({
  remove: props => event => props.removeCard(props.card.id),
}))(Card);
