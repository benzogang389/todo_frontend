export const CREATE_NEW_TICKET_REQUEST = 'CREATE_NEW_TICKET_REQUEST';
export const CREATE_NEW_TICKET_SUCCESS = 'CREATE_NEW_TICKET_SUCCESS';
export const TICKETS_ERROR = 'TICKETS_ERROR';

export type TicketsTypes = Array<{
  _id: string;
  name: string;
  category_id: string;
  completed: boolean;
}>;

export interface TicketsInitialState {
  tickets: TicketsTypes;
  loading: boolean;
  error: string;
}

export interface CreateNewTicketProps {
  text: string;
}
