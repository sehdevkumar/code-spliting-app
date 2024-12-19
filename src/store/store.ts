import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./reducer";
import { useSelector } from "react-redux";
import customMiddleware from "./middleware";

export const AppStore = configureStore({
    reducer: appReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(customMiddleware),
})


export type UseAppState = ReturnType<typeof appReducer>
export const  useAppStore = () => useSelector((state: UseAppState) => state)
export const useAppDispatch = () => AppStore.dispatch