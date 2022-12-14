const mongoose = require('mongoose')
const express = require('express')
const app = express()
const router = require('./router/router')

const { getCompanies } = require('./controllers/controller')

const PORT = 7000


const db = 'mongodb+srv://alebastr:BC1PmPNUYwylSBBQ@davaidavai.q6aq7i0.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(db)
.then(res => console.log(res))
.catch(err => console.log(err))

app.listen(PORT, (error)=> error? console.log(error) : console.log(`listening port ${PORT}`))

app.use(express.urlencoded({ extended: false }))

router.get('/', getCompanies)

app.use(router)

app.use((req, res) => {
  res.status(404)
})