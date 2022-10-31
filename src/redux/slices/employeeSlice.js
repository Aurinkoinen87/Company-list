import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'




const initialState = {
 
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

export const dataSelector = (state) => state.data



export const { setLoading } = employeeSlice.actions

export default employeeSlice.reducer