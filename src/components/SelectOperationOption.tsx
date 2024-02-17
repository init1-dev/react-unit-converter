import { OperationWithKey } from "../store/operations/slice";

interface OperationElementProps {
    operation: OperationWithKey
}

const SelectOperationOption = ({ operation }: OperationElementProps) => {
  return (
    <>
        <option key={operation.id} value={operation.text}>{operation.text}</option>
    </>
  );
}

export default SelectOperationOption;