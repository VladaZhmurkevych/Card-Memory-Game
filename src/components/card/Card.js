import React, { useState } from 'react';
import classNames from 'classnames';
import classes from './_card.module.scss';
import {connect} from "react-redux";
import {setOpenedCards} from "../store/actions";

function Card(props) {
  const { name, opened, index, setOpenedCards, guessed, image  } = props;
  const [flipped, setFlipped] = useState(false);
  return (
    <div className={classes.card} onClick={() => {
      setFlipped(prevFlipped => !prevFlipped);
      if(!flipped) {
        if(!opened.find((item) => item.index === index)&&!guessed.find((item) => item.index === index)){
          setOpenedCards({
            index: index,
            name: name,
          });
        }
      }
    }}>
      <div className={classNames({[classes.cardContainer]: true,
        [classes.cardFlipped]: ((guessed.find((item) => item.index === index))||opened.find((item) => item.index === index))})} >
        <div className={[classes.cardFront, classes.cardFace].join(' ')}>
          <p className={classes.text}>Open the card</p>
        </div>
        <div className={[classes.cardBack, classes.cardFace].join(' ')}>
          <img className={classes.image} src={image} alt={"image"}/>
        </div>
      </div>
    </div>
  );
}


const mapStateToProps = state => ({
  opened: state.appReducer.opened,
  guessed: state.appReducer.guessed,
});


const mapDispatchToProps = dispatch => ({
  setOpenedCards: (card) => dispatch(setOpenedCards(card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);