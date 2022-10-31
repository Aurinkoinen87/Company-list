import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid';




const initialState = {
 companies: [
  {companyId: uuid(), title: 'Бани веники', personnelQ: 35, address: 'Вологда, большой пер.д.3'},
  {companyId: uuid(), title: 'Угарные квесты', personnelQ: 7, address: 'Магадан, ул.Рецедивистов 47/15'},
  {companyId: uuid(), title: 'Хочу посмотреть', personnelQ: 39, address: 'Санкт Петербург, ул.Ядвиги Пштэнской 4А'},
  {companyId: uuid(), title: 'Съел и порядок', personnelQ: 7, address: 'Москва, аллея Осетинцев 67, 1п/2Б'},
  {companyId: uuid(), title: 'Агрсельмашпромторгхозстрой', personnelQ: 108, address: 'Воронежская обл, п.Ленино-Радужное'},
  {companyId: uuid(), title: 'Отдых вокруг', personnelQ: 4, address: 'Сочи, ул.Карапетяна 8'},
  {companyId: uuid(), title: 'Красота с утра', personnelQ: 18, address: 'Иваново, Сталеваров 27'},
]
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

export const dataSelector = (state) => state.data



export const { setLoading } = companySlice.actions

export default companySlice.reducer