import React from 'react';
import DogContainer from '../containers/DogContainer';

const AllDogsComponent = ({ loading, dogs, adoptionStatus }) => {
  if (loading){
    return (<div>loading</div>);
  }

  return (
    <div>
      <h2>All Dogs</h2>
        <div className="alldogs">
        {
          dogs.map((dog, i) => (
            <DogContainer
              key={i}
              data={dog}
              isOwned={adoptionStatus[i]}
            />
          ))
        }
      </div>
    </div>
  )
}

export default AllDogsComponent;
