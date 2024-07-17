import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        removeUser: (state, action) => {
            state = state.filter((u, index) => {
                return index != action.payload
            });
        },
        updateUser: (state, action) => {
            state[action.payload.index] = action.payload.user;
        },
    },
})

export const { addUser, removeUser, updateUser } = userSlice.actions

export default userSlice.reducer;