import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../api/api'




const initialState = {
  employees: []
} 


const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {

    },
    extraReducers: (builder) => {
      builder.addCase(fetchWorkers.fulfilled, (state, action) => {
        state.employees = action.payload
      })
    },
})

export const fetchWorkers = createAsyncThunk(
  'employees/fetchWorkers',
  async (id) => {
    const response = await API.getWorkers(id)
    return response.data
  }
)

export const employeeSelector = (state) => state.employees

export const {} = employeeSlice.actions

export default employeeSlice.reducer












