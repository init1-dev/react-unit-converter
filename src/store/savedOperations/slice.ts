import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
    {
        id: "1",
        input: 100,
        operationId: 1
    },
    {
        id: "2",
        input: 6,
        operationId: 2
    },
    {
        id: "3",
        input: 15,
        operationId: 4
    },
    {
        id: "4",
        input: 50,
        operationId: 3
    },
]

export type SavedId = string;

export interface Saved {
    input: number,
    operationId: number
}

export interface SavedWithId extends Saved {
    id: SavedId
}

const initialState: SavedWithId[] = (() => {
    const persistedState = localStorage.getItem("__saved__state__");
    return (persistedState) ? JSON.parse(persistedState).saved : DEFAULT_STATE;
})();

export const savedSlice = createSlice({
    name: 'savedOperations',
    initialState,
    reducers: {
        addSavedOperation: (state, action: PayloadAction<Saved>) => {
            const id = crypto.randomUUID();
            return [ ...state, { id, ...action.payload }];
        },
        deleteSavedById: (state, action: PayloadAction<SavedId>) => {
            const id = action.payload;
            return state.filter((user) => user.id !== id)
        }
    }
});

export default savedSlice.reducer;

export const { addSavedOperation, deleteSavedById } = savedSlice.actions;