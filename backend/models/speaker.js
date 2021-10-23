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

const speakerSchema = new Schema({
  account_id:{
    type: [{ type: Schema.Types.ObjectId, ref: 'Account'}],
    required: true
  },
  title: {
    type: String,
    required: true
  }, 
  name: {
    type: String,
    required: true
  }, 
  affiliation: {
    type: String,
    required: false
  }, 
  email: {
    type: String,
    required: false
  },
  category: {
    type: String,
    required: true
  }, 
  phone_no:{
    type:String,
    required:true
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
    type:String,
    required: true
  },
  speech_title:{
    type:String,
    required: true
  },
  speech_time:{
    type:String,
    required: true
  },
  photo:[subSchema],
}, {
  timestamps: true,
});

const Speaker = mongoose.model('Speaker', speakerSchema);

module.exports = Speaker;