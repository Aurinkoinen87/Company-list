import Company from '../models/company.js'

export const getCompanies = (req, res) => {
  Company.find()
  .then(data => console.log(data))
  .catch(error => console.log(error))
}

export const getPersonnel = (req, res) => {
    Company.find()
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }


