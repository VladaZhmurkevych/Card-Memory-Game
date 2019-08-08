import React from 'react';
import Timer from "../../timer/Timer";
import classes from './_header.module.scss';

function Header(props) {
  return (
    <div className={classes.header}>
      <Timer />
    </div>
  );
}

export default Header;