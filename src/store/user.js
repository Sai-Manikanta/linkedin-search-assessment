import { createSlice } from '@reduxjs/toolkit'
import user from './../data/user.json'

const userSlice = createSlice({
    name: 'user',
    initialState: user
});

export default userSlice.reducer;