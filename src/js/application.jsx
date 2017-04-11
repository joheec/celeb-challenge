import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import { createStore } from 'redux';
import reducer from './reducers';
import CardApp from './CardApp.jsx';

let store = createStore(reducer);

const addInitialCards = () => {
	let initialData = [
    { name: "Arnold Schwartzengger", photo: "../img/avatars/arnold.png" },
    { name: "Patrick Duffy", photo: "../img/avatars/pduff.png" },
    { name: "Candace Cameron", photo: "../img/avatars/candace.png" },
    { name: "Ralph Macchio", photo: "../img/avatars/ralph.png" },
    { name: "Jaleel White", photo: "../img/avatars/jaleel.png" },
    { name: "Alf", photo: "../img/avatars/alf.png" },
    { name: "Delta Burke", photo: "../img/avatars/delta.png" },
		{ name: "Mark-Paul Gosselaar", photo: "" },
	];
	initialData.map(card => {
		store.dispatch({
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
	<AppContainer>
		<Provider store={ store }>
 			<CardApp />
 		</Provider>
 	</AppContainer>, 
	root
);
