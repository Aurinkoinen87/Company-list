import Employee from '../models/employee.js'
import Company from '../models/company.js'
import { validationResult } from 'express-validator'


export const addWorker = async (req, res) => {
  try {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }
    const { companyId } = req.body 
    const doc = new Employee({ 
      name: req.body.name,
      surname: req.body.surname,
      jobTitle: req.body.jobTitle,
      companyId: companyId
    })
    const company = await Company.findByIdAndUpdate(companyId,
       { $inc: { personnelQ: 1 }},
       { returnDocument: 'after',})
    const worker = await doc.save()
    return res.json({ worker, company })
  } catch (e) {
    console.log(e)
    return res.status(500).json({
      message: 'something went wrong!!!'
    })
  }
}

export const getWorkers = async (req, res) => {
  try {
    const companyId = req.params.id
    const company = await Company.findById(companyId)
    const workers = await Employee.find({ companyId })
    res.json({ workers })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'something went wrong'
    })
  }
}

export const deleteWorker = async (req, res) => {
  try {
    const { companyId, workerId } = req.body
    const ok = await Employee.findByIdAndDelete(workerId)
    const company = await Company.findByIdAndUpdate(
      companyId,
    {
      $inc: { personnelQ: -1 }
    },
    {
      returnDocument: 'after',
    })
    const workers = await Employee.find({ companyId })
    res.json({ company, workers })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'something went wrong'
    })
  }
}

export const updateWorker = async (req, res) => {
  try {
    const { workerId, ...data } = req.body
    const worker = await Employee.findByIdAndUpdate(workerId, 
    {
      ...data
    },
    {
      returnDocument: 'after',
    })
    res.json({ worker })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'something went wrong'
    })
  }
}