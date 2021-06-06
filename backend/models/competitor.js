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

const abstractSchema = new Schema({
  title: {type: String, required: false},
  content: {type: String, required: false},
  keywords:[{type:String, required: false}]
});

const bookChapterSchema = new Schema({
  introduction: {
    type: String,
    required: false
  },
  content: {
    type: String,
    required: false
  },
  conclusion: {
    type: String,
    required: false
  },
  references:[{type:String, required: false}]
});


const memberSchema = new Schema({
  name: {
    type: String,
    required: false
  }, 
  affiliation: {
    type: String,
    required: false
  }, 
  email: {
    type: String,
    required: false
  }
})

const competitorSchema = new Schema({
  account_id:{
    type: [{ type: Schema.Types.ObjectId, ref: 'Account'}],
    required: true
  },
  category: {
    type: String,
    required: true
  }, 
  name: {
    type: String,
    required: true
  }, 
  affiliation: {
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
  phone_no:{
	type:String,
	required:true
<<<<<<< HEAD
<<<<<<< HEAD
  },
=======
  }
>>>>>>> 4ea11f3 (with phone number)
=======
  },
>>>>>>> f9183b2 (update changes)
  address: {
    type: String,
    required: true
  }, 
  gender: {
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
=======

>>>>>>> d526164 (upload sponsor company logo)
=======

>>>>>>> 614d77e (update model)
  poster:[subSchema],
  achievements:[subSchema],
  publications:[subSchema],
  grants:[subSchema],
<<<<<<< HEAD
  
<<<<<<< HEAD
<<<<<<< HEAD
  video:[videoSchema],
=======
=======
>>>>>>> 614d77e (update model)
  video:[subSchema],
>>>>>>> d526164 (upload sponsor company logo)
=======
  video:[videoSchema],
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)

  abstract:[abstractSchema],

  bookChapter: [bookChapterSchema],

  members:[memberSchema]



}, {
  timestamps: true,
});






const Competitor = mongoose.model('Competitor', competitorSchema);

module.exports = Competitor;