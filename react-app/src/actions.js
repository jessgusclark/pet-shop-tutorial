import { REQUEST_ALL_DOGS, RECIEVE_ALL_DOGS } from './types';

export const requestAllDogs = () => ({
  type: REQUEST_ALL_DOGS
});

export const recieveAllDogs = dogs => ({
  type: RECIEVE_ALL_DOGS,
  dogs
});
