import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import reducer from '../reducers';
import CardApp from './card-app';
import { addCard } from '../actions/card.js';

let store = createStore(reducer);
const initialActions = [
  { name: "Arnold Schwartzengger", photo: "../img-initial/arnold.png" },
  { name: "Patrick Duffy", photo: "../img-initial/pduff.png" },
  { name: "Candace Cameron", photo: "../img-initial/candace.png" },
  { name: "Ralph Macchio", photo: "../img-initial/ralph.png" },
  { name: "Jaleel White", photo: "../img-initial/jaleel.png" },
  { name: "Alf", photo: "../img-initial/alf.png" },
  { name: "Delta Burke", photo: "../img-initial/delta.png" },
  { name: "Mark-Paul Gosselaar", photo: "" },
].map(addCard).forEach(action => store.dispatch(action));

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
