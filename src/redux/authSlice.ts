import { createSlice } from '@reduxjs/toolkit'
const initialUsers = {
    users: [
        {
            username: "admin",
            password: "Test12345",
        }
    ]
}

export const authSlice = createSlice({
    name: "users",
    initialState: initialUsers,
    reducers: {
        returnUsers: (state) => state
    }
})


export const { returnUsers } = authSlice.actions;
export default authSlice.reducer 