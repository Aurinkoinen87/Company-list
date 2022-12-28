import Employee from '../models/employee.js'


export const getPersonnel = async (req, res) => {
  try {

  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'something went wrong'
    })
  }
}