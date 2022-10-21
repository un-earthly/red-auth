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
        returnUsers: (state) => state,
        addUser: (state, action) => {
            state.users.push(action.payload)
        }
    }
})


export const { returnUsers, addUser } = authSlice.actions;
export default authSlice.reducer