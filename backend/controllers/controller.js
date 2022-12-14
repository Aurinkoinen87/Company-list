const Company = require('../models/company')

const getCompanies = (req, res) => {
  Company.find()
  .then(data => console.log(data))
  .catch(error => console.log(error))
}

const getPersonnel = (req, res) => {
    Company.find()
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }


module.exports = { getCompanies, getPersonnel } 
