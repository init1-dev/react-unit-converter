// import React from 'react';
import { useEffect, useState } from 'react';
import saveIcon from '../assets/save.svg'
import swapLogo from '../assets/change.svg'
import { useAppSelector } from "../hooks/store";
import { useSavedActions } from '../hooks/useSavedActions';

function Operations() {
  const operationList = useAppSelector((state) => state.operations);
  const { addSaved } = useSavedActions();
  let isChangeFromButton = false;

  const [currentOperation, setCurrentOperation] = useState<number>(0);
  const [currentInput, setCurrentInput ] = useState<string>("0");
  const [result, setResult] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

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

  const switchOperationUnit = (operationUnit: string) => {
    return operationUnit.split("-").reverse().join("-");
  }

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

  const handleButtonClick = () => {
    isChangeFromButton = true;
    handleResultChange();
    isChangeFromButton = false;
  };

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
      <div id="op-title">
        <span className='t-white'>convert</span>
      </div>
      <form id="saveForm" onSubmit={handleSaveOperation}>
        <div className='op-block'>
        {/* SELECT */}
          <select name="operationSelect" id="operationSelect" value={operationList[currentOperation].text} onChange={handleOperationChange}>
            {operationList.map(operation => (
              <option key={operation.id} value={operation.text}>{operation.text}</option>
            ))}
          </select>
          <button type="button" onClick={handleButtonClick}>
            <img src={swapLogo} className="changeLogo" alt="unit-swap-logo" />
          </button>
          {/* INPUT */}
          <input type="text" name="numberInput" id="numberInput" value={currentInput} onChange={handleInputChange}/>
          <span className='t-white'> {operationList[currentOperation].from}</span>
        </div>
      </form>
      <div className='res-block'>
        {/* SAVE BUTTON */}
        <button form="saveForm" type='submit'>
          <img src={saveIcon} className="saveLogo" alt="unit-converter-logo" />
        </button>
        {/* RESULTS */}
        <div className='t-white'>
          <span className='result-number'>{result.toFixed(2)}</span>
          <span className='result-unit'>{operationList[currentOperation].to}</span>
        </div>
      </div>
      <span className='t-white error-msg'>{error === false ? "" : errorMsg}</span>
    </>
  )
}

export default Operations