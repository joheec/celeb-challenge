import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import Store from './store.js';
import CardApp from './CardApp.jsx';

const addInitialCards = () => {
	let initialData = [
//		{ name: "Mark-Paul Gosselaar", photo: "" },
    { name: "Delta Burke", photo: "../img/avatars/delta.png" },
    { name: "Alf", photo: "../img/avatars/alf.png" },
    { name: "Jaleel White", photo: "../img/avatars/jaleel.png" },
    { name: "Ralph Macchio", photo: "../img/avatars/ralph.png" },
    { name: "Candace Cameron", photo: "../img/avatars/candace.png" },
    { name: "Patrick Duffy", photo: "../img/avatars/pduff.png" },
    { name: "Arnold Schwartzengger", photo: "../img/avatars/arnold.png" }
	];
	initialData.map(card => {
		Store.dispatch({
			type: 'ADD_CARD',
			name: card.name,
			photo: card.photo
		});
	});
};

addInitialCards();
//console.log(Store.getState());

const root = document.createElement('div');
document.body.append(root);

ReactDom.render(
	<Provider store={ Store }>
 		<CardApp />
 	</Provider>, 
	root
);
