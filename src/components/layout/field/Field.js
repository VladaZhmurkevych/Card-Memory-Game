import React, { useEffect } from 'react';
import { connect } from "react-redux";
import classes from './_field.module.scss';
import {fetchCards, closeCards, guessCards} from "../../store/actions";
import Card from "../../card/Card";

function Field(props) {
  const { fetchCards, cards, loading, opened, closeCards, guessCards } = props;
  const size = Math.sqrt(cards.length);

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  useEffect(() => {
    if(opened.length === 2) {
      if(opened[1].name === opened[0].name) {
        setTimeout(() => {
          guessCards();
        }, 900);
      } else {
        setTimeout(() => {
          closeCards();
        }, 900);
      }
    }
  }, [closeCards, guessCards, opened]);

  return (
    <React.Fragment>
      {
        !loading
          ? <div className={classes.field} style={{ width: size*150 + (size - 1)*25 }}>
          { cards.map((item, index) => {
            return <Card key={index} name={item.name} image={item.image} class={""} index={index}/>;
          })}
        </div>
          : null
      }
    </React.Fragment>

  );
}

const mapStateToProps = state => ({
  fieldSize: state.appReducer.fieldSize,
  cards: state.appReducer.cards,
  loading: state.appReducer.loading,
  opened: state.appReducer.opened,
});

const mapDispatchToProps = dispatch => ({
  fetchCards: () => dispatch(fetchCards()),
  closeCards: () => dispatch(closeCards()),
  guessCards: () => dispatch(guessCards()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);

