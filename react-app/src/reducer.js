import { REQUEST_ALL_DOGS, RECIEVE_ALL_DOGS } from './types';

const initialState = {
  dogsLoading: false,
  dogs: [],
};

const addressInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ALL_DOGS:
      return {
        ...state,
        dogsLoading: true,
      }
    case RECIEVE_ALL_DOGS:
      return {
        ...state,
        dogsLoading: false,
        dogs: action.dogs,
      }
    default:
      return state;
  }
};

export default addressInputReducer;
