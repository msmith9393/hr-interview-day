import { FETCH_COLORS } from '../constants/action_types';

export default function(state = null, action) {
  switch( action.type ) {
    case FETCH_COLORS:
      return action.payload;
  }
  return state;
}
