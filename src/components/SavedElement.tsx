import styled from "styled-components";
import { useAppSelector } from "../hooks/store";
import { useSavedActions } from "../hooks/useSavedActions";
import { SavedWithId } from "../store/savedOperations/slice";

import closeIcon from '../assets/close.svg'

interface SavedElementProps {
  item: SavedWithId;
}

const SavedElement = ({ item }: SavedElementProps) => {
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
  background-color: ${({ theme }) => theme.savedCardBg};
  padding: 0.4rem 0.2rem 0.4rem 0.5rem;
  border-radius: 0.4rem;
	box-shadow: rgb(0 0 0 / 40%) 0px 2px 4px, rgb(0 0 0 / 30%) 0px 7px 13px -3px, rgb(0 0 0 / 20%) 0px -3px 0px inset;
  font-size: 12px;
  font-weight: 400;
  transition: transform 0.2s;

  &:hover {
    filter: brightness(90%);
    transform: translateY(-4px);
  }
  
  &:active {
    transform: translateY(0px);
  }

  button {
    all: unset;
  }
`;

const SavedTextStyle = styled.span`
  color: #808080;
`;

const CloseIconStyle = styled.img`
  width: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export default SavedElement;