import Company from '../models/company.js'

export const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find()
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'something went wrong'
    })
  }
}




