import { SavedId, addSavedOperation, deleteSavedById } from "../store/savedOperations/slice";
import { useAppDispatch } from "./store";

export const useSavedActions = () => {
    const dispatch = useAppDispatch();

    const addSaved = ({input, operationId}: {input: number, operationId: number}) => {
        dispatch(addSavedOperation({input, operationId}))
    };
    
    const removeSaved = ( id: SavedId ) => {
        dispatch(deleteSavedById(id));
    };

    return { addSaved, removeSaved }
};
