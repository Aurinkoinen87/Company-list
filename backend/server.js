import mongoose from 'mongoose'
import express from 'express'
import { createCompany } from './controllers/company-controller.js'
import { getPersonnel } from './controllers/employee-controller.js'
import { companyValidation } from './validations/validation.js'



const app = express()


const PORT = 7000


const db = 'mongodb+srv://alebastr:BC1PmPNUYwylSBBQ@davaidavai.q6aq7i0.mongodb.net/companylist?retryWrites=true&w=majority'

mongoose.connect(db)
.then(res => console.log('Connected to DB'))
.catch(err => console.log('DB error', err))

app.listen(PORT, (error)=> error? console.log(error) : console.log(`Started on port: ${PORT}`))



app.post('/companies', companyValidation, createCompany)


app.use((req, res) => {
  res.status(404)
})