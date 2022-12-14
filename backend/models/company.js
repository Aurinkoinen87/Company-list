import mongoose from 'mongoose'

const Schema = mongoose.Schema

const companySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  personnelQ: {
    type: Number,
    default: 0
  },
  address: {
    type: String,
    required: true
  },
},
{ timestamps: true }
)

export default mongoose.model('Company', companySchema)

