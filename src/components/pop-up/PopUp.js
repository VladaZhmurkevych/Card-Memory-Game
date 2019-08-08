import React from 'react';
import classes from './_pop-up.module.scss'

function PopUp(props) {
  const { children } = props;
  const popUp = React.createRef();
  const handleClickOutside = (event) => {
    const element = event.target;
    const { close } = props;
    if (element === popUp) close();
  };

  return (
    <div className={classes.popUp} ref={popUp} onClick={handleClickOutside}>
      <div className={classes.popUpContainer}>
        {children}
      </div>
    </div>
  );
}

export default PopUp;