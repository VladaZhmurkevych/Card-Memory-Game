import React from 'react';
import PopUp from "../PopUp";
import classes from './_finish-pop-up.module.scss'
import {formatTime} from "../../../utils";
import PopUpButton from "../../sharedUI/pop-up-button/PopUpButton";
import {finishGame, toggleFinishPopup, toggleStartPopup} from "../../store/actions";
import {connect} from "react-redux";

const FinishPopUp = (
  {
    close,
    timer,
    time
  }) => (
  <PopUp close={close}>
    <p className={classes.text}>Congratulations</p>
    <p className={classes.time}>
      Time:
      {' '}
      {formatTime(time - timer)}
    </p>
    <PopUpButton onClick={close}>Try again</PopUpButton>
  </PopUp>
);

const mapStateToProps = state => ({

  timer: state.appReducer.timer,
  time: state.appReducer.time,
});

const mapDispatchToProps = dispatch => ({
  close: () => {
    dispatch(finishGame());
    dispatch(toggleFinishPopup());
    dispatch(toggleStartPopup());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FinishPopUp);