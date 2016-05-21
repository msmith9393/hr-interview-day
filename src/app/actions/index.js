import axios from 'axios';
const moment = require('moment');
import { browserHistory } from 'react-router';

import { EVENT_TYPES } from '../constants/event_types';

import { FETCH_COLORS } from '../constants/action_types';

export function fetchColors() {
  const url = `/api/data`;
  const request = axios.get(url);
  return {
    type: FETCH_COLORS,
    payload: request
  }
}
