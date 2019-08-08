import React from 'react';
import { connect } from 'react-redux';
import PopUp from '../PopUp'
import classes from './_start-pop-up.module.scss';
import PopUpButton from "../../sharedUI/pop-up-button/PopUpButton";
import {formatTime} from "../../../utils";
import {toggleStartPopup} from "../../store/actions";

const StartPopUp = (props) => {
  const { close, time } = props;
  return (  <PopUp close={close}>
    <div >
      <p className={classes.title}>Card memory game</p>
      <p className={classes.time}>
        {' '}
        Time for game:
        {' '}
        {time}
      </p>
    </div>

    <PopUpButton onClick={close}>Start the game</PopUpButton>
  </PopUp>);
};


const mapStateToProps = state => ({
  title: state.appReducer.title,
  time: formatTime(state.appReducer.time)
});

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(toggleStartPopup())
});

export default connect(mapStateToProps, mapDispatchToProps)(StartPopUp);