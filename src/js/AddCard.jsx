import React from 'react';
import { connect } from 'react-redux';

let AddCard = ({ dispatch }) => {
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
				onClick={() => {
					dispatch({
						type: 'ADD_CARD',
						name: name.value,
						photo: photo.value
					});
					name.value = '';
					photo.value = '';
				}}
			>Create</button>
		</form>
	);
};

export default connect()(AddCard);
