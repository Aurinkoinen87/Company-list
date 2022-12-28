import mongoose from 'mongoose'

const Schema = mongoose.Schema

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  job: {
    type: String,
    required: true
  },
},
{ timestamps: true }
)

export default mongoose.model('Employee', employeeSchema)