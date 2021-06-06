const mongoose = require('mongoose');
<<<<<<< HEAD
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
=======

const Schema = mongoose.Schema;
>>>>>>> 2dbc05f (sponsor sign up updated)

const accountSchema = new Schema({
  role:{
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
<<<<<<< HEAD
    unique:true
=======
>>>>>>> 2dbc05f (sponsor sign up updated)
  }, 
  password: {
    type: String,
    required: true
<<<<<<< HEAD
  },
  
=======
  }
>>>>>>> 2dbc05f (sponsor sign up updated)
}, {
  timestamps: true,
});

<<<<<<< HEAD
bcrypt.hash('dinowex99admin', 10, function(err, hashedPassword){
    // if(err){
    //   res.json({
    //     error:err
    //   })
    // }

    Account.insertMany([
        { role: 'Admin', email: 'admin@dinowex.com', password:hashedPassword},
    ],
        { ordered: false}
      
    ).then(function(){
        console.log("Account data inserted")  // Success
    }).catch(function(error){
        console.log(error)      // Failure
    });

});
=======


>>>>>>> 2dbc05f (sponsor sign up updated)


const Account = mongoose.model('Account', accountSchema);

module.exports = Account;