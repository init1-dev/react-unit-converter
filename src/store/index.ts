import { configureStore, type Middleware } from "@reduxjs/toolkit";

import savedReducer from "./savedOperations/slice";
import operationsReducer from "./operations/slice";

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
    // podemos realizar un acción antes y/o después de la acción en cuestón, en este caso será después.
    next(action);
    localStorage.setItem("__saved__state__", JSON.stringify(store.getState()))
}

export const store = configureStore({
    reducer: {
        saved: savedReducer,
        operations: operationsReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(persistanceLocalStorageMiddleware)
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;