import Employee from '../models/employee.js'
import { validationResult } from 'express-validator'


export const addWorker = async (req, res) => {
  try {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }

    const doc = new Employee({ 
      name: req.body.name,
      surname: req.body.surname,
      jobTitle: req.body.jobTitle,
      companyId: req.params.id
    })
  
    const worker = await doc.save()
    res.json({ worker })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'something went wrong'
    })
  }
}

export const getWorkers = async (req, res) => {
  try {
    const workers = await Employee.find(
      {
        companyId: req.params.id
      })
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
    const { id } = req.body
    await Employee.findByIdAndDelete(id)
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