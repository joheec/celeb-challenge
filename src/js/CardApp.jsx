import React from 'react';
import { connect } from 'react-redux';

import '../css/application.scss';

const AddCard = ({ dispatch }) => {
	let name;
	let photo;
	return (
		<form>	
			<div>
				<label>Full Name</label>
				<input ref={ node => { name = node; }} required></input>
			</div>
			<div>
				<label>Photo URL</label>
				<input ref={ node => { photo = node; }}></input> 
			</div>
			<button
				onClick={(e) => {
					e.preventDefault();
					submitCard(dispatch, name.value, photo.value);
					name.value = '';
					photo.value = '';
				}}
			>Create</button>
		</form>
	);
};

function submitCard(dispatch, name, photo) {
	dispatch({
		type: 'ADD_CARD',
		name,
		photo
	});
}

const CardForm = connect()(AddCard);

const mapStateToProps = ({ cards }) => {
	return {
		cards
	};
};

const Cards = ({ cards }) => {
	return (
		<div>
			{cards.map(card => 
				<div key={card.name} className='card'>
					<button className="close-button">x</button>
					<img src={card.photo} alt={card.name} height="42" width="42"/> 
					<span>{card.name}</span>
				</div>
			)}
		</div>
	);
};

const CardList = connect(mapStateToProps, null)(Cards);

export default () =>  {
	return(
		<div>
			<CardForm />
			<CardList />
		</div>
	);
};
