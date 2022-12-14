import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'




const initialState = {
 companies: []
} 


const companySlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    setLoading(state, action){
      state.loading = action.payload
    }
    },
})

export const companySelector = (state) => state.companies



export const { setLoading } = companySlice.actions

export default companySlice.reducer