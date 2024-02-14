import { createSlice } from "@reduxjs/toolkit";

export interface Operation {
    id: number,
    text: string,
    from: string,
    to: string,
    operation: number
}

export interface OperationWithKey extends Operation {
    key: string
}

const initialState: OperationWithKey[] = [
    {key: 'km-mi', id: 0, text: "km → miles", from: "km", to: "miles", operation: 0.62137},
    {key: 'mi-km', id: 1, text: "miles → km", from: "miles", to: "km", operation: 1.60934},
    {key: 'ft-m', id: 2, text: "feet → meters", from: "feet", to: "m", operation: 0.30479},
    {key: 'm-ft', id: 3, text: "meters → feet", from: "m", to: "feet", operation: 3.28083},
    {key: 'cm-in', id: 4, text: "cm → inches", from: "cm", to: "inch", operation: 0.39370},
    {key: 'in-cm', id: 5, text: "inches → cm", from: "inch", to: "cm", operation: 2.53999}
]

export const operationsSlice = createSlice({
    name: 'operations',
    initialState,
    reducers: {}
})

export default operationsSlice.reducer;