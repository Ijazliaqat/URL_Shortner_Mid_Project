import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shortUrl: []
}

export const shortnerSclice = createSlice({
    name: 'shortner',
    initialState,
    reducers: {
        shortenUrl: (state, action) => {
            console.log(action, '🤣');
        }
    }
})

export const { shortenUrl } = shortnerSclice.actions
export default shortnerSclice.reducer