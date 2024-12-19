import { createReducer } from "@reduxjs/toolkit";
import { AppState, initialState } from "./state";
import { ActionSetLoading, ActionSetError, ActionSetMessage, ActionSuccessFetch } from "./actions";


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
        .addCase(ActionSuccessFetch, (state, action) => {
            state.data = action.payload
            state.error = null

        })
})