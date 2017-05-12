import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([ action.payload.data ]);  // inserts to end of array
      return [ action.payload.data, ...state ]; // adds to start of array
  }
  return state;
}
