import Company from '../models/company.js'
import { validationResult } from 'express-validator'

export const createCompany = async (req, res) => {
  try {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }

    const doc = new Company({ 
      title: req.body.title,
      personnelQ: req.body.personnelQ,
      address: req.body.address
    })
  
    const company = await doc.save()
    res.json({ company })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'something went wrong'
    })
  }
}

export const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find()
    res.json({ companies })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'something went wrong'
    })
  }
}



