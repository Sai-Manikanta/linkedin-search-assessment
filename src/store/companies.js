import { createSlice } from '@reduxjs/toolkit'
import companies from './../data/companies.json'

const companiesSlice = createSlice({
    name: 'companies',
    initialState: companies
});

export default companiesSlice.reducer;