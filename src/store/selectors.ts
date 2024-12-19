import { AppState } from "./state";

export const selectIsLoading = (state: AppState) => state.isLoading;
export const selectError = (state: AppState) => state.error;
export const selectMessage = (state: AppState) => state.message;