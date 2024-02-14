import styled from "styled-components";
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
      <SavedElementStyle key={item.id}>
        <SavedTextStyle>
          {item.input + " " + operationList[item.operationId].from + " → " + (item.input * operationList[item.operationId].operation).toFixed(2) + " " + operationList[item.operationId].to }
        </SavedTextStyle>
        <button type="button" onClick={() => removeSaved(item.id)}>
          <CloseIconStyle src={closeIcon} alt="unit-swap-logo" />
        </button>
      </SavedElementStyle>
    </>
  );
}

const SavedElementStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #E3E3E3;
  padding: 0.4rem 0.2rem 0.4rem 0.5rem;
  border-radius: 0.4rem;
  font-size: 12px;
  font-weight: 400;

  button {
    all: unset;
  }
`;

const SavedTextStyle = styled.span`
  color: #676767;
`;

const CloseIconStyle = styled.img`
  width: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export default SavedElement;