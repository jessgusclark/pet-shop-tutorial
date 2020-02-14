import { requestAllDogs, recieveAllDogs } from './actions';

export const getAllDogs = (dispatch) => {
  dispatch(requestAllDogs());

  return new Promise((resolve) => {
    fetch('./pets.json')
      .then(res => res.json())
      .then(data => resolve(dispatch(recieveAllDogs(data))))
      .catch(error => console.log(error));
  });


}
