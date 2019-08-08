import {
  FIELD_SIZE,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  OPENED_CARDS,
  CLOSE_CARDS,
  GUESSED_CARDS,
  TIMER_TICK,
  FINISH_GAME
} from "./types";
import {SECOND} from "../../utils";

const INITIAL_STATE = {
  fieldSize: 0,
  cards: [],
  time: 0,
  timer: 0,
  title: "",
  loading: false,
  error: null,
  opened: [],
  guessed: [],
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FIELD_SIZE:
      return {
        ...state,
        fieldSize: action.payload
      };
    case FETCH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        cards: action.payload.game.cards,
        time: action.payload.game.time,
        timer: action.payload.game.time,
        title: action.payload.game.title
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case OPENED_CARDS:
      return {
        ...state,
        opened: [...state['opened'], action.payload]
      };
    case CLOSE_CARDS:
      return {
        ...state,
        opened: [...state['opened'].splice(2)],
      };
    case GUESSED_CARDS:
      return {
        ...state,
        guessed: [...state['guessed'], ...state['opened'].slice(0, 2)],
        opened: [...state['opened'].splice(2)],
      };
    case TIMER_TICK:
      return {
        ...state,
        timer: state.timer - SECOND
      };
    case FINISH_GAME:
      return {
        ...state,
        timer: state.time
      };
    default: return state;
  }

};

export default appReducer;