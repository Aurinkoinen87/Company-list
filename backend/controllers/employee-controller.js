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
    const company = await Company.findById(companyId)
    if(!company) return res.status(404)
    const doc = new Employee({ 
      name: req.body.name,
      surname: req.body.surname,
      jobTitle: req.body.jobTitle,
      companyId: company._id
    })
  
    const worker = await doc.save()
    Company.findByIdAndUpdate(
      company._id,
    {
      $inc: { personnelQ: 1 }
    },
    {
      returnDocument: 'after',
    },
    (err, company)=> {
      if(err) {
        return res.status(500).json({
        message: 'something went wrong'
      })
    }
    res.json({ worker, company })
    })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'something went wrong'
    })
  }
}

export const getWorkers = async (req, res) => {
  try {
    const companyId = req.params.id
    const workers = await Employee.find({ companyId })
    res.json({ workers })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'something went wrong'
    })
  }
}

// export const deleteWorker = async (req, res) => {
//   try {
//     const { workerId } = req.body
//     const { companyId } = req.body
//     await Employee.findByIdAndDelete(workerId)
//     let company = await Company.findById(companyId)
//     company._doc.personnelQ--
//     company = await company.save()
//     res.json({ company })
//   } catch (e) {
//     console.log(e)
//     res.status(500).json({
//       message: 'something went wrong'
//     })
//   }
// }