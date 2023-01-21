import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shortUrl: []
}

export const shortnerSclice = createSlice({
    name: 'shortner',
    initialState,
    reducers: {
        shortenUrl: (state, action) => {
            // console.log(action.payload, '🤣');
            localStorage.setItem('shortURLS', JSON.stringify(action.payload))
            const items = JSON.parse(localStorage.getItem('shortURLS'));

            // console.log(items);
            state.shortUrl = items
        }
    }
})

export const { shortenUrl } = shortnerSclice.actions
export default shortnerSclice.reducer