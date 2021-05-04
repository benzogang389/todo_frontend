import { RootThunkAction } from 'store/types';

import { PROJECTS_LOADING_SUCCESS } from './types';

export const clearProjectErrors = (): RootThunkAction => async (dispatch) => {
  dispatch({
    type: PROJECTS_LOADING_SUCCESS,
  });
};
