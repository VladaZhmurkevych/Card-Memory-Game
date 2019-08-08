import axios from 'axios';

import {
  FIELD_SIZE,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  OPENED_CARDS,
  CLOSE_CARDS,
  GUESSED_CARDS,
  TIMER_TICK,
  FINISH_GAME,
  TOGGLE_START_POPUP,
  TOGGLE_FINISH_POPUP
} from "./types";

export const setFieldSize = (size) => ({
  type: FIELD_SIZE,
  payload: size
});

export const toggleStartPopup = () => ({
  type: TOGGLE_START_POPUP,
});

export const toggleFinishPopup = () => ({
  type: TOGGLE_FINISH_POPUP,
});

export const fetchStart = () => ({
  type: FETCH_START,
});

export const fetchSuccess = data => ({
  type: FETCH_SUCCESS,
  payload: data
});

export const fetchError = error => ({
  type: FETCH_ERROR,
  payload: {
    error
  }
});

export const setOpenedCards = (card) => ({
  type: OPENED_CARDS,
  payload: card,
});

export const closeCards = () => ({
  type: CLOSE_CARDS,
});

export const guessCards = () => ({
  type: GUESSED_CARDS,
});

export const timerTick = () => ({
  type: TIMER_TICK,
});

export const finishGame = () => ({
  type: FINISH_GAME,
});

export const fetchCards = () => (dispatch) => {
  dispatch(fetchStart());
  axios.get('/api/cards')
    .then(res => {
      console.log(res.data);
      dispatch(fetchSuccess(res.data))
    })
    .catch(err => dispatch(fetchError(err)));
};