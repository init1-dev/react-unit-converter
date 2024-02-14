// import React from 'react';
import { useAppSelector } from "../hooks/store";
import { useSavedActions } from "../hooks/useSavedActions";
import { SavedWithId } from "../store/savedOperations/slice";

import closeIcon from '../assets/close.svg'

interface SavedElementProps {
  item: SavedWithId;
}

const SavedElement: React.FC<SavedElementProps> = ({ item }) => {
  const operationList = useAppSelector((state) => state.operations);
  const { removeSaved } = useSavedActions();

  return (
    <>
      <div key={item.id} className="saved-element">
        <span className="saved-text">{item.input + " " + operationList[item.operationId].from + " → " + (item.input * operationList[item.operationId].operation).toFixed(2) + " " + operationList[item.operationId].to }</span>
        <button type="button" onClick={() => removeSaved(item.id)}>
          <img src={closeIcon} className='closeIcon' alt="unit-swap-logo" />
        </button>
      </div>
    </>
  );
}

export default SavedElement;