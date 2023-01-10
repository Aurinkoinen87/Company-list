import { configureStore } from '@reduxjs/toolkit'
import employees from './slices/employeeSlice'
import companies from './slices/companySlice'
import preloaders from './slices/loadingSlice'

export const store = configureStore({
  reducer: {
    employees,
    companies,
    preloaders
  }
})
