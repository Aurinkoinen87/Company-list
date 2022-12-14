import { configureStore } from '@reduxjs/toolkit'
import employees from './slices/employeeSlice'
import companies from './slices/companySlice'

export const store = configureStore({
  reducer: {
    employees,
    companies
  }
})
