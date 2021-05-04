import { AnyAction } from 'redux';

import {
  TicketsInitialState,
  CREATE_NEW_TICKET_REQUEST,
  CREATE_NEW_TICKET_SUCCESS,
  TICKETS_ERROR,
} from './types';

export const initialStateTickets: TicketsInitialState = {
  tickets: [],
  loading: false,
  error: '',
};

export default function reducer(state = initialStateTickets, action: AnyAction) {
  switch (action.type) {
    case CREATE_NEW_TICKET_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case CREATE_NEW_TICKET_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case TICKETS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
}
