import React from 'react';
import AdoptButtonContainer from '../containers/AdoptButtonContainer';

const DogComponent = ({data, isOwned, isOwner}) => {
  console.log(isOwner);
  return (
    <div className="dog">
      <h2>{data.name}</h2>
      <img src={data.picture} alt={`Dog ${data.name}`} />
      <ul>
        <li><strong>Breed</strong>: {data.breed}</li>
        <li><strong>Age</strong>: {data.age}</li>
        <li><strong>Location</strong>: {data.location}</li>
      </ul>
      {!isOwned && <AdoptButtonContainer id={data.id} />}
      {isOwner && <div className="owner">OWNER</div>}
      {!isOwner && isOwned && (
        <div className="owned">Owned</div>
      )}
    </div>
  )
}

export default DogComponent;
