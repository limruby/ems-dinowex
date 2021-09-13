const { Binary } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  source: {
    type: Buffer,
    required: false
  }
});

const visitorSchema = new Schema({
  account_id:{
    type: [{ type: Schema.Types.ObjectId, ref: 'Account'}],
    required: true
  },
  name: {
    type: String,
    required: true
  }, 
  nric_passport_selection: {
    type: String,
    required: true
  }, 
  nric_passport_no: {
    type: String,
    required: true
  }, 
  contact: {
    type: String,
    required: true
  }, 
  address_1: {
    type: String,
    required: true
  }, 
  address_2: {
    type: String,
    required: true
  },
  postcode:{
    type: String,
    required: true
  },
  city:{
    type: String,
    required: true
  },
  state:{
    type: String,
    required: true
  },
  country:{
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  bill_id:{
    type: String, 
  },
  bill_paid_at:{
    type: String,  
  },
  bill_status: {
    type:String,
  },
  receipt:[subSchema],
  certificate:[subSchema],
  
}, {
  timestamps: true,
});

const Visitor = mongoose.model('Visitor', visitorSchema);

module.exports = Visitor;