import { createSlice } from '@reduxjs/toolkit'
const initialLocation = {
    location: "dhaka"
}


export const locationSlice = createSlice({
    name: "location",
    initialState: initialLocation,
    reducers: {
        defaultLocation: (state) => state,
        addLocation: (state, action) => {
            state.location = action.payload
        }
    }
})


export const { defaultLocation, addLocation } = locationSlice.actions;
export default locationSlice.reducer