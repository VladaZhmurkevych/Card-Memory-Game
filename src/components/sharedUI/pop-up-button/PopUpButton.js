import React from 'react';
import classes from './_pop-up-button.scss';

const PopUpButton = ({ onClick, children }) => (
  <button type="button" onClick={onClick} className={classes.button}>{children}</button>
);


export default PopUpButton;