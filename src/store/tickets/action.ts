import request from 'services/axios';

import { RootThunkAction } from 'store/types';

import {
  CREATE_NEW_TICKET_REQUEST,
  CREATE_NEW_TICKET_SUCCESS,
  TICKETS_ERROR,
  CreateNewTicketProps,
} from './types';

export const createNewTicket = ({ text }: CreateNewTicketProps): RootThunkAction => async (
  dispatch
) => {
  try {
    dispatch({
      type: CREATE_NEW_TICKET_REQUEST,
    });

    const body = JSON.stringify({ text });
    await request('/api/ticket', 'POST', body);

    dispatch({
      type: CREATE_NEW_TICKET_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: TICKETS_ERROR,
      payload: {
        error: error.message || 'Something went wrong',
      },
    });
  }
};
