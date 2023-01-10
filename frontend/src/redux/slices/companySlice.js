import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../api/api'


const initialState = {
 companies: []
} 


const companySlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {

    },
  extraReducers: (builder) => {
    builder.addCase(fetchCompanies.fulfilled, (state, action) => {
      state.companies = action.payload
    })
  },

})

export const companySelector = (state) => state.companies

export const fetchCompanies = createAsyncThunk(
  'companies/fetchCompanies',
  async () => {
    const response = await API.getCompanies()
    return response.data
  }
)

export const {} = companySlice.actions

export default companySlice.reducer