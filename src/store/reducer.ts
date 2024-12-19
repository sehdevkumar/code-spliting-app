import { createReducer } from "@reduxjs/toolkit";
import { AppState, initialState } from "./state";
import { ActionSetLoading, ActionSetError, ActionSetMessage } from "./actions";


export const appReducer = createReducer<AppState>(initialState, (builder) => {
    builder
        .addCase(ActionSetLoading, (state, action) => {
            state.isLoading = action.payload
        })
        .addCase(ActionSetError, (state, action) => {
            state.error = action.payload
        })
        .addCase(ActionSetMessage, (state, action) => {
            state.message = action.payload
        })
})