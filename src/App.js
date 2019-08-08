import React, {useEffect} from 'react';
import './App.css';
import Field from "./components/layout/field/Field";
import Header from "./components/layout/header/Header";
import {connect} from "react-redux";
import StartPopUp from "./components/pop-up/start-pop-up/StartPopUp";
import {setOpenedCards, toggleFinishPopup} from "./components/store/actions";
import FinishPopUp from "./components/pop-up/finish-pop-up/FinishPopUp";

function App(props) {
  const { cards, startPopup, finishPopup, guessed, finishGame  } = props;
  const size = Math.sqrt(cards.length);
  const blur = finishPopup || startPopup;
  useEffect(() => {
    console.log(guessed.length, cards.length);
    if(guessed.length === cards.length && guessed.length) {
      finishGame();
    }
  }, [guessed]);

  return (
    <div style={{ width: size*150 + (size - 1)*25 + 2*30 }}>

      {startPopup&& <StartPopUp/>}

      <div style={{ filter: blur ? 'blur(15px)' : '' }}>
        <Header/>
        <Field/>
      </div>

      {finishPopup&&<FinishPopUp/>}
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
  guessed: state.appReducer.guessed,
});

const mapDispatchToProps = dispatch => ({
  finishGame: () => dispatch(toggleFinishPopup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
