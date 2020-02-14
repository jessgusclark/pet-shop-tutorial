import Web3 from 'web3';
import { requestAllDogs, recieveAllDogs, requestAdoptionStatus, resolveAdoptionStatus } from './actions';
import { adoptionAbi } from './abis.json';
export const getAllDogs = (dispatch) => {
  dispatch(requestAllDogs());

  new Promise((resolve) => {
    fetch('./pets.json')
      .then(res => res.json())
      .then(data => { resolve(dispatch(recieveAllDogs(data))) })
      .catch(error => console.log(error));
  });

  dispatch(requestAdoptionStatus());
  const web3 = new Web3(window.ethereum);
  const adoption = new web3.eth.Contract(adoptionAbi, '0x7cb02118c4f0B9638B52125A8ba529D2518A66Da');

  adoption.methods.getAdopters().call()
    .then(data => { dispatch(resolveAdoptionStatus(data)) })
    .catch(error => console.log('error', error));
}

