import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import { getCompanies, createCompany, deleteCompany, updateCompany } from './controllers/company-controller.js'
import { getWorkers, addWorker, deleteWorker, updateWorker } from './controllers/employee-controller.js'
import { companyValidation, workerValidation } from './validations/validation.js'



const app = express()


const PORT = 7000

app.use(cors())
app.use(express.json())


const db = 'mongodb+srv://alebastr:RooXVntj81UbqpIK@cluster0.cjwko2o.mongodb.net/company-list?retryWrites=true&w=majority'

mongoose.connect(db)
.then(res => console.log('Connected to DB'))
.catch(err => console.log('DB error', err))

app.listen(PORT, (error)=> error? console.log(error) : console.log(`Started on port: ${PORT}`))



app.get('/companies', getCompanies)
app.post('/companies', companyValidation, createCompany)
app.put('/companies/:id', companyValidation, updateCompany)
app.delete('/companies/:id', deleteCompany)

app.get('/workers/:id', getWorkers)
app.post('/workers', workerValidation, addWorker)
app.put('/workers', workerValidation, updateWorker)
app.delete('/workers', deleteWorker)



app.use((req, res) => {
  res.status(404)
})
