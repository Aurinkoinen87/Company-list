import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'




const initialState = {
  employees: []
} 


const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setLoading(state, action){
      state.loading = action.payload
    }
    },

})

export const employeeSelector = (state) => state.employees



export const { setLoading } = employeeSlice.actions

export default employeeSlice.reducer