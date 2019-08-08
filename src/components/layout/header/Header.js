import React from 'react';
import Timer from "../../timer/Timer";
import classes from './_header.module.scss';
import {connect} from "react-redux";

function Header(props) {
  const { displayTimer } = props;
  return (
    <div className={classes.header}>
      {displayTimer&&<Timer />}
    </div>
  );
}


const mapStateToProps = state => ({
  displayTimer: !state.appReducer.startPopup && !state.appReducer.finishPopup
});

export default connect(mapStateToProps)(Header);