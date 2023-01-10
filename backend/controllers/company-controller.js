import Company from '../models/company.js'
import Employee from '../models/employee.js'
import { validationResult } from 'express-validator'

export const createCompany = async (req, res) => {
  try {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }

    const doc = new Company({ 
      title: req.body.title,
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
    res.json(companies)
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'something went wrong'
    })
  }
}

export const deleteCompany = async (req, res) => {
  try {
    const id = req.params.id
    await Employee.deleteMany({
      companyId: id
    })
    await Company.findByIdAndDelete(id)
    res.json({
      message: 'success'
     })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'something went wrong'
    })
  }
}


export const updateCompany = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const company = await Company.findByIdAndUpdate(id, 
    {
      ...data
    },
    {
      returnDocument: 'after',
    })
    res.json({ company })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'something went wrong'
    })
  }
}