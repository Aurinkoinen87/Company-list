import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCompanies } from './companySlice'



const initialState = {
  isLoading: false
} 


const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {

    },
    extraReducers: (builder) => {
      builder.addCase(fetchCompanies.pending, (state) => {
        state.isLoading = true
      })
      builder.addCase(fetchCompanies.rejected, (state) => {
        state.isLoading = false
      })
    },
})


export const {} = loadingSlice.actions

export default loadingSlice.reducer