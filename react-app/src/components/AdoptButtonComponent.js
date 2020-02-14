import React from 'react';

const AdoptButtonComponent = ({ handleAdoptClick, id }) => {
  return (
    <button onClick={() => handleAdoptClick(id) }>
      Adopt!
    </button>
  )
}

export default AdoptButtonComponent;
