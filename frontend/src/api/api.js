import axios from 'axios'



const instance = axios.create({
  baseURL: 'http://localhost:7000',
  headers: {
    'Content-Type': 'application/json'
  }
})



const API = {
  getCompanies() {
      return instance.get('/companies')
  },
  deleteCompany(id) {
      return instance.delete(`/companies/${id}`)
  },
  updateCompany(id, title, address) {
      return instance.put(`/companies/${id}`, { title, address })
  },
  createCompany(title, address) {
      return instance.post(`/companies`, { title, address })
  },
  getWorkers(id) {
      return instance.get(`/workers/${id}`)
  }

}


export default API