import { body } from 'express-validator'


export const companyValidation = [
  body('title', 'title should consist of at least 2 symbols').isLength({ min: 2}),
  body('personnelQ', 'number of workers in the firm must be shown').isLength({ min: 1}),
  body('address', 'address should consist of at least 5 symbols').isLength({ min: 5}),
]

export const workerValidation = [
  body('name', 'name should consist of at least 2 symbols').isLength({ min: 2}),
  body('surname', 'surname should consist of at least 2 symbols').isLength({ min: 2}),
  body('jobTitle', 'job title should consist of at least 5 symbols').isLength({ min: 4}),
]