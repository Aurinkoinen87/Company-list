const mongoose = require('mongoose')

const Schema = mongoose.Schema

const companySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  personnelQ: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  staff: {
    type: Array,
    required: true
  }
})

const Company = mongoose.model('Company', companySchema)

module.exports = Company