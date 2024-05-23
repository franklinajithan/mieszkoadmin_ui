import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";

export const reduxstore=configureStore({
    devTools:true,
    reducer:{user: userSlice}
})