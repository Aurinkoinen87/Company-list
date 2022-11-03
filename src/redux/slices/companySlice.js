import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'




const initialState = {
 companies: [
  {companyId: 0, title: 'Бани веники', personnelQ: 35, address: 'Вологда, большой пер.д.3'},
  {companyId: 1, title: 'Угарные квесты', personnelQ: 7, address: 'Магадан, ул.Рецедивистов 47/15'},
  {companyId: 2, title: 'Хочу посмотреть', personnelQ: 39, address: 'Санкт Петербург, ул.Ядвиги Пштэнской 4А'},
  {companyId: 3, title: 'Съел и порядок', personnelQ: 7, address: 'Москва, аллея Осетинцев 67, 1п/2Б'},
  {companyId: 4, title: 'Агрсельмашпромторгхозстрой', personnelQ: 108, address: 'Воронежская обл, п.Ленино-Радужное'},
  {companyId: 5, title: 'Отдых вокруг', personnelQ: 4, address: 'Сочи, ул.Карапетяна 8'},
  {companyId: 6, title: 'Красота с утра', personnelQ: 18, address: 'Иваново, Сталеваров 27'},
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

export const companySelector = (state) => state.companies



export const { setLoading } = companySlice.actions

export default companySlice.reducer