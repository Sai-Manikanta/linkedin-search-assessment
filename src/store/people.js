import { createSlice } from '@reduxjs/toolkit'
import people from './../data/people.json'

const peopleSlice = createSlice({
    name: 'people',
    initialState: people
});

export default peopleSlice.reducer;