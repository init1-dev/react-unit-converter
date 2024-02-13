// import React from 'react';

// import SavedElement from "./SavedElement";
import { useAppSelector } from "../hooks/store";
import { useSavedActions } from "../hooks/useSavedActions";

import closeIcon from '../assets/close.svg'

const Saved = () => {
  const saved = useAppSelector((state) => state.saved);
  const operationList = useAppSelector((state) => state.operations);
  const { removeSaved } = useSavedActions();
  

  return (
    <>
        <p className="saved-title">saved</p>
        <div className="saved-container">
          {saved.map(item => (
            <div key={item.id} className="saved-element">
              <span className="saved-text">{item.input + " " + operationList[item.operationId].from + " → " + (item.input * operationList[item.operationId].operation).toFixed(2) + " " + operationList[item.operationId].to }</span>
              <button type="button" onClick={() => removeSaved(item.id)}>
                <img src={closeIcon} className='closeIcon' alt="unit-swap-logo" />
              </button>
            </div>
          ))}
          {/* <SavedElement />
          <SavedElement />
          <SavedElement />
          <SavedElement />
          <SavedElement />
          <SavedElement />
          <SavedElement />
          <SavedElement />
          <SavedElement />
          <SavedElement />
          <SavedElement />
          <SavedElement /> */}
        </div>
    </>
  );
}

export default Saved;
