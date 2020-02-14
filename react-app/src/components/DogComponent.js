import React from 'react';

const DogComponent = ({data, isOwned}) => {
  return (
    <div className="dog">
      <h2>{data.name}</h2>
      <img src={data.picture} alt={`Dog ${data.name}`} />
      <ul>
        <li><strong>Breed</strong>: {data.breed}</li>
        <li><strong>Age</strong>: {data.age}</li>
        <li><strong>Location</strong>: {data.location}</li>
      </ul>
      {!isOwned && <div>Adopt!</div>}
    </div>
  )
}

export default DogComponent;
