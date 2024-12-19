import { createAction } from "@reduxjs/toolkit";

export const ActionSetLoading = createAction<boolean>('SET_LOADING')
export const ActionFetchData = createAction('FETCH_DATA')
export const ActionSetError = createAction<string>('SET_ERROR')
export const ActionSetMessage = createAction<string>('SET_MESSAGE')

export const ActionSuccessFetch = createAction<Array<any>>('SUCCESS_FETCH')
