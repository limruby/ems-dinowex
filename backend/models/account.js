const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const accountSchema = new Schema({
  role:{
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique:true
  }, 
  password: {
    type: String,
    required: true
<<<<<<< HEAD
  },
  
=======
  }
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
}, {
  timestamps: true,
});

<<<<<<< HEAD
<<<<<<< HEAD
bcrypt.hash('dinowex99admin', 10, function(err, hashedPassword){
    // if(err){
    //   res.json({
    //     error:err
    //   })
    // }

<<<<<<< HEAD
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
>>>>>>> 66ccca2 (sponsor uitmpay done)
=======
>>>>>>> b014062 (admindashboard_incomplete)
=======
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
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


const Account = mongoose.model('Account', accountSchema);

module.exports = Account;