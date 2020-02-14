import {
  REQUEST_ALL_DOGS, RECIEVE_ALL_DOGS, REQUEST_ADOPTION_STATUS,
  RECIEVE_ADOPTION_STATUS, REQUEST_TO_ADOPT, RECIEVE_TO_ADOPT,
  GET_USER_ADDRESS,
} from './types';

export const setUserAddress = address => ({
  type: GET_USER_ADDRESS,
  address,
})

export const requestAllDogs = () => ({
  type: REQUEST_ALL_DOGS,
});

export const recieveAllDogs = dogs => ({
  type: RECIEVE_ALL_DOGS,
  dogs,
});

export const requestAdoptionStatus = () => ({
  type: REQUEST_ADOPTION_STATUS,
});

export const resolveAdoptionStatus = status => ({
  type: RECIEVE_ADOPTION_STATUS,
  status,
});

export const requestAdoption = () => ({
  type: REQUEST_TO_ADOPT,
});

export const recieveAdoption = (petId, ownerAddress) => ({
  type: RECIEVE_TO_ADOPT,
  petId,
  ownerAddress,
})
