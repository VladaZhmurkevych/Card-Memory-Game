import React from 'react';
import './App.css';
import Field from "./components/layout/field/Field";
import Header from "./components/layout/header/Header";
import {connect} from "react-redux";
import StartPopUp from "./components/pop-up/start-pop-up/StartPopUp";

function App(props) {
  const { cards, startPopup, finishPopup } = props;
  const size = Math.sqrt(cards.length);
  const blur = finishPopup || startPopup;
  return (
    <div style={{ width: size*150 + (size - 1)*25 + 2*30 }}>

      {startPopup&& <StartPopUp/>}

      <div style={{ filter: blur ? 'blur(15px)' : '' }}>
        <Header/>
        <Field/>
      </div>

    </div>
  );
}

const mapStateToProps = state => ({
  fieldSize: state.appReducer.fieldSize,
  cards: state.appReducer.cards,
  loading: state.appReducer.loading,
  opened: state.appReducer.opened,
  startPopup: state.appReducer.startPopup,
  finishPopup: state.appReducer.finishPopup,
});

export default connect(mapStateToProps)(App);
