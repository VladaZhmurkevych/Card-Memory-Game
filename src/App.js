import React from 'react';
import './App.css';
import Field from "./components/layout/field/Field";
import Header from "./components/layout/header/Header";
import {connect} from "react-redux";

function App(props) {
  const { cards } = props;
  const size = Math.sqrt(cards.length);

  return (
    <div style={{ width: size*150 + (size - 1)*25 + 2*30 }}>
      <Header/>
      <Field/>
    </div>
  );
}

const mapStateToProps = state => ({
  fieldSize: state.appReducer.fieldSize,
  cards: state.appReducer.cards,
  loading: state.appReducer.loading,
  opened: state.appReducer.opened,
});

export default connect(mapStateToProps)(App);
