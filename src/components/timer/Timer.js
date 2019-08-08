import React, {useEffect} from 'react';
import connect from "react-redux/es/connect/connect";
import {finishGame, timerTick} from "../store/actions";
import {formatTime, SECOND} from "../../utils";
import classes from './_timer.module.scss'

function Timer(props) {
  let interval = null;
  const { tickTimer, timer } = props;

  useEffect(() => {
    interval = setInterval(() => {
      tickTimer();
    }, SECOND);

    return () => {
      clearInterval(interval);
    }
  }, []);



  return (
    <p className={classes.timer}>{formatTime(timer)}</p>
  );
}


const mapStateToProps = state => state.appReducer;

const mapDispatchToProps = dispatch => ({
  tickTimer: () => dispatch(timerTick()),
  finishGame: () => dispatch(finishGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);