import {
  REQUEST_ALL_DOGS, RECIEVE_ALL_DOGS, REQUEST_ADOPTION_STATUS,
  RECIEVE_ADOPTION_STATUS, REQUEST_TO_ADOPT, RECIEVE_TO_ADOPT,
  GET_USER_ADDRESS,
} from './types';

const initialState = {
  dogsLoading: false,
  adoptionLoading: false,
  requesting: false,
  dogs: [],
  adoptionStatus: [],
  user: null,
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
    case REQUEST_TO_ADOPT:
      return {
        ...state,
        requesting: true,
      }
    case RECIEVE_TO_ADOPT:
      return {
        ...state,
        requesting: false,
        adoptionStatus: {
          ...state.adoptionStatus,
          [action.petId]: action.ownerAddress,
        }
      }
    case GET_USER_ADDRESS:
      return {
        ...state,
        user: action.address,
      }
    default:
      return state;
  }
};

export default addressInputReducer;
