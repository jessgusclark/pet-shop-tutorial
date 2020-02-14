import {
  REQUEST_ALL_DOGS, RECIEVE_ALL_DOGS,
  REQUEST_ADOPTION_STATUS, RECIEVE_ADOPTION_STATUS,
} from './types';

const initialState = {
  dogsLoading: false,
  adoptionLoading: false,
  dogs: [],
  adoptionStatus: [],
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
    case REQUEST_ADOPTION_STATUS:
      return {
        ...state,
        adoptionLoading: true,
      }
    case RECIEVE_ADOPTION_STATUS:
      return {
        ...state,
        adoptionLoading: false,
        adoptionStatus: action.status,
      }
    default:
      return state;
  }
};

export default addressInputReducer;
