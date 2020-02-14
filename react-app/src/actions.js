import {
  REQUEST_ALL_DOGS, RECIEVE_ALL_DOGS, REQUEST_ADOPTION_STATUS,
  RECIEVE_ADOPTION_STATUS,
} from './types';

export const requestAllDogs = () => ({
  type: REQUEST_ALL_DOGS,
});

export const recieveAllDogs = dogs => ({
  type: RECIEVE_ALL_DOGS,
  dogs,
});

export const requestAdoptionStatus = () => ({
  type: REQUEST_ADOPTION_STATUS,
})

export const resolveAdoptionStatus = status => ({
  type: RECIEVE_ADOPTION_STATUS,
  status,
})
