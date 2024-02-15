import styled from "styled-components";
import { useEffect, useState } from 'react';
import { useAppSelector } from "../hooks/store";
import { useSavedActions } from '../hooks/useSavedActions';

import SelectOperationOption from './SelectOperationOption';

import saveIcon from '../assets/save.svg'
import swapLogo from '../assets/change.svg'

function Operations() {
  const operationList = useAppSelector((state) => state.operations);
  const { addSaved } = useSavedActions();
  
  const [currentOperation, setCurrentOperation] = useState<number>(0);
  const [currentInput, setCurrentInput ] = useState<string>("");
  const [result, setResult] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  let isChangeFromButton = false;

  useEffect(() => {
    const regExp = /^(?=.{1,10}$)[0-9]+(?:\.[0-9]*)?$/;
    if (regExp.test(currentInput)) {
      setResult(parseFloat(currentInput) * operationList[currentOperation].operation);
      setError(false);
    } else {
      if(currentInput === ""){
        setError(false)
      } else {
        setError(true);
      }
      setResult(0);
    }
  }, [currentOperation, currentInput, operationList]);

  useEffect(() => {
    if(error === true) {
      setErrorMsg("Incorrect format/max length(10) exceded, 00.00");
    } else {
      setErrorMsg("");
    }
  }, [error])
  

  // Controlador de eventos para cambiar el estado currentOperation
  const handleOperationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    (e.target.id === "operationSelect") ? setCurrentOperation(e.target.selectedIndex) : null;
  };

  // Controlador de eventos para cambiar el estado currentInput
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    (e.target.id === "numberInput") ? setCurrentInput(e.target.value) : null;
  };

  // Realiza la conversion de operaciones
  const switchOperationUnit = (operationUnit: string) => {
    return operationUnit.split("-").reverse().join("-");
  }

  // Realiza el intercambio entre el input y el resultado
  const handleResultChange = () => {
    const currentSymbol = operationList[currentOperation].key;
    const switchOperation = switchOperationUnit(currentSymbol);
    
    const switchedOperationId = operationList.find(operation => operation.key === switchOperation)?.id;
    if(switchedOperationId !== undefined) {
      setCurrentOperation(operationList[switchedOperationId].id);
    }    
    
    if(!isChangeFromButton) {
      const resultValue = parseFloat(currentInput);
      setResult(resultValue);
    } else {
      setCurrentInput(result.toFixed(2));
    }
  };

  // Controla el click del boton de intercambio entre input y resultado
  const handleButtonClick = () => {
    isChangeFromButton = true;
    handleResultChange();
    isChangeFromButton = false;
  };

  // Realiza el guardado de la operacion y reseteo del formulario
  const handleSaveOperation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!error) {
      if(currentInput !== "0" && currentInput !== ""){
        addSaved({ input: parseFloat(currentInput), operationId: currentOperation });
        setCurrentInput("");
      }
    }
  }

  return (
    <>
      <SectionStyle>
        <OpTitleStyle>
          <span className='t-white'>convert</span>
        </OpTitleStyle>
        <form id="saveForm" onSubmit={handleSaveOperation}>
          <OpBlockStyle>
          {/* SELECT */}
            <select name="operationSelect" id="operationSelect" value={operationList[currentOperation].text} onChange={handleOperationChange}>
              {operationList.map(operation => (
                <SelectOperationOption key={operation.id} operation={operation} />
              ))}
            </select>
            <button type="button" onClick={handleButtonClick}>
              <ChangeLogoStyle src={swapLogo} alt="unit-swap-logo" />
            </button>
            {/* INPUT */}
            <input type="text" name="numberInput" id="numberInput" value={currentInput} onChange={handleInputChange}/>
            <span className='t-white'> {operationList[currentOperation].from}</span>
          </OpBlockStyle>
        </form>
        <ResBlockStyle>
          {/* SAVE BUTTON */}
          <button form="saveForm" type='submit'>
            <SaveLogoStyle src={saveIcon} alt="unit-converter-logo" />
          </button>
          {/* RESULTS */}
          <div className='t-white'>
            <ResultNumberStyle>{result.toFixed(2)}</ResultNumberStyle>
            <ResultUnitStyle>{operationList[currentOperation].to}</ResultUnitStyle>
          </div>
        </ResBlockStyle>
        <ErrorMsgStyle className={`t-white error-msg ${error === false ? "" : "show"}`} >{error === false ? "" : errorMsg}</ErrorMsgStyle>
      </SectionStyle>
    </>
  )
}

const SectionStyle= styled.main`
  background-color: #2E0039;
  border-radius: 21px;
  padding: 1.5rem;
  margin: 6rem 20% 3rem 20%;

  select, input {
    background-color: #2E0039;
    color: white;
    border: 0;
    border-bottom: 2px solid white;
    width: 90%;
    cursor: pointer;
  }

  select {
    width: 92%;
  }

  input {
    text-align: right;
    width: 90%;
  }

  select:focus, input:focus {
    outline: none;
  }

  button {
    all: unset;
  }

  @media only screen and (max-width: 1024px) {
    margin: 5rem 12% 3rem 12%
  }

  @media only screen and (max-width: 700px) {
    margin: 4.5rem 5% 2.5rem 5%
  }
`;

const OpTitleStyle= styled.div`
  padding-bottom: 1.5rem;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
`;

const OpBlockStyle= styled.div`
  padding-bottom: 1.5rem;
  display: grid;
  grid-template-columns: 45% 10% 40% 5%;

  form {
    all: unset;
  }

  @media only screen and (max-width: 700px) {
    display: grid;
    row-gap: 1.5rem;
    grid-template-columns: 90% 10%;
  }
`;

const ChangeLogoStyle = styled.img`
  width: 24px;

  &:hover {
    cursor: pointer;
  }
`;

const SaveLogoStyle = styled.img`
  width: 24px;
  transition: all ease 0.3s;

  &:hover {
    width: 26px;
    cursor: pointer;
  }
`;

const ResBlockStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ResultNumberStyle = styled.span`
  padding-right: 0.5rem;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
`;

const ResultUnitStyle = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const ErrorMsgStyle = styled.span`
  font-size: 10px;
  font-weight: lighter;
  color: red;
  opacity: 0;
  transition: all 0.5s ease;

  &.show {
    opacity: 1;
  }
`;

export default Operations;