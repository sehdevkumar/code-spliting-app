export type AppState = {
    isLoading: boolean | null,
    error: string | null,
    message: string | null
}

export const initialState: AppState = {
    isLoading: false,
    error: null,
    message: null
}