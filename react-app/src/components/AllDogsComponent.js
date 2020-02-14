import React from 'react';
import DogContainer from '../containers/DogContainer';

const AllDogsComponent = ({ dogs }) => {
  return (
    <div>
      <h2>All Dogs</h2>
        <div className="alldogs">
        {
          dogs.map((dog, i) => (
            <DogContainer key={i} data={dog} />
          ))
        }
      </div>
    </div>
  )
}

export default AllDogsComponent;
