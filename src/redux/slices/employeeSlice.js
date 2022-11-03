import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'




const initialState = {
  employees: [
    {companyId: 0, personId: 0, surname: 'Пирожков', name: 'Артур', jobTitle: 'Повар-пекарь'},
    {companyId: 1, personId: 1, surname: 'Кот', name: 'Леопольд', jobTitle: 'Охранник'},
    {companyId: 2, personId: 2, surname: 'Бородай', name: 'Иван', jobTitle: 'Сисадмин'},
    {companyId: 3, personId: 3, surname: 'Шум', name: 'Агнесса', jobTitle: 'Секретарь'},
    {companyId: 4, personId: 4, surname: 'Гайкин', name: 'Павел', jobTitle: 'Слесарь'},
    {companyId: 5, personId: 5, surname: 'Полетай', name: 'Лолита', jobTitle: 'Турагент'},
    {companyId: 6, personId: 6, surname: 'Закусян', name: 'Зозо', jobTitle: 'Водитель'},
  ]
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