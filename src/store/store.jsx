import { configureStore } from "@reduxjs/toolkit";
import shortnerSlice from './url-shortner/url-shortner'


export const store = configureStore({
    reducer:{
        shortner: shortnerSlice
    }
})