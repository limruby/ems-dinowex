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

const videoSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  source: {
    type: String,
    required: false
  }

})

const sponsorSchema = new Schema({
  account_id:{
    type: [{ type: Schema.Types.ObjectId, ref: 'Account'}],
    required: true
  },
  category: {
    type: String,
    required: true
  }, 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  phone_no:{
	type:String,
	required:true
  },
>>>>>>> 577544f (with payment gateway-half done)
=======
>>>>>>> 54aefd4 (sponsor payment gateway setup halfway, amount not clear)
=======
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
  company_name: {
    type: String,
    required: true
  }, 
  company_address: {
    type: String,
    required: true
  }, 
  company_pic_name: {
    type: String,
    required: true
  }, 
  company_contact: {
    type: String,
    required: true
  }, 
  company_website: {
    type: String,
    required: true
  }, 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 66ccca2 (sponsor uitmpay done)
=======
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
  company_pic_ic:{
    type: String,
    required: true
  },
<<<<<<< HEAD
<<<<<<< HEAD
  bill_id:{
    type: String, 
  },
  bill_paid_at:{
    type: String,  
  },
  bill_status: {
    type:String,
  },
  payment_verify: {
    type:String,
  },
  company_logo:[subSchema],
  poster:[subSchema],
  video:[videoSchema],
=======
  company_logo: {
    type: Buffer,
    required: false
  }, 
=======
>>>>>>> 082b413 (upload and display company logo)
=======
>>>>>>> 66ccca2 (sponsor uitmpay done)

  company_logo:[subSchema],
  poster:[subSchema],
<<<<<<< HEAD
  video:[subSchema],
>>>>>>> d6169f2 (sponsor edit profile can fetch data)
=======
  video:[videoSchema],
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
=======

  company_logo:[subSchema],
  poster:[subSchema],
  video:[videoSchema],
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed

}, {
  timestamps: true,
});

const Sponsor = mongoose.model('Sponsor', sponsorSchema);

module.exports = Sponsor;