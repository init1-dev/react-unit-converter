// import React from 'react';
import closeIcon from '../assets/close.svg'

const SavedElement = () => {
  return (
    <>
      <div className="saved-element">
        <span className="saved-text">{"100 miles → 160 km"}</span>
        <img src={closeIcon} className='closeIcon' alt="unit-swap-logo" />
      </div>
    </>
  );
}

export default SavedElement;
