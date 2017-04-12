import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cardActions from '../actions/card';
import CardForm from '../components/card-form';
import CardList from '../components/card-list';

const CardApp = ({ cards, actions }) => (
  <div>
    <CardForm addCard={actions.addCard} />
    <CardList cards={cards} />
  </div>
);

const mapStateToProps = state => ({
  cards: state.cards.cards,
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(cardActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardApp);
