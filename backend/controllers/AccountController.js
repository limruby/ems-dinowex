const Account = require('../models/account');
const Competitor = require('../models/competitor');
const Sponsor = require('../models/sponsor');
const Judge = require('../models/judge');
const Speaker = require('../models/speaker');
const Visitor = require('../models/visitor')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;


const register = (req, res, next)=>{
  bcrypt.hash(req.body.password, 10, function(err, hashedPassword){
    if(err){
      res.json({
        error:err
      })
    }

    const role = req.body.role;
    const email = req.body.email;
    const password = hashedPassword;

    Account.findOne({ email:req.body.email}, function(err, result) {
      if(err) throw err;
      if(result){
        res.json('Email existed');
      }
      else{

        const newAccount = new Account({
          role, 
          email,
          password
        });

        newAccount.save()
        .then(() => res.json(newAccount))
        .catch(err => res.status(400).json('Error: ' + err));
      }

      
    });

  });

};



const login = (req, res, next )=> {
  const password = req.body.password;

  Account.findOne({ email:req.body.email}, function(err, result) {
    if(err) throw err;
    if(result){
      bcrypt.compare(password, result.password, function(err, isMatch){
        if(err) throw err;
        if(isMatch){
          const id = result.id;
          const token = jwt.sign({id}, process.env.JSONWTK, {expiresIn: '6h'})
          res.json({auth: true, token:token, result:result})

        }
        else{
          res.json('Password not match')
        }
      })
    }
    else{
      res.json('Account not found.')
    }

  });
}



const read = (req, res, next)=>{
  var account_id = JSON.parse(req.query.account_id);
  Account.findById(ObjectId(account_id), (err, accounts) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!accounts) {
      return res
      .status(404)
      .json({ success: false, error: req.query.account_id })
    }
    return res.status(200).json({ success: true, data: accounts })
  }).catch(err => console.log(err))
};



const update = (req, res, next)=>{
  var updateAccount={};
  //if renew password
  if(req.body.newPassword){
    bcrypt.hash(req.body.newPassword, 10, function(err, hashedPassword){
      if(err){
        res.json({
          error:err
        })
      }

      updateAccount['password'] = hashedPassword;
      Account.findByIdAndUpdate(req.body._id, updateAccount, (err, account) => {
        if (err) {
          return res.status(400).json({ success: false, error: err })
        }
        if(account){
          return res.status(200).json({ success: true, data: updateAccount })
        }
      }).catch(err => console.log(err))
    });
  }
  else{

    updateAccount['email'] = req.body.email;
    Account.findByIdAndUpdate(req.body._id, updateAccount, (err, account) => {
      if (err) {
        return res.status(400).json({ success: false, error: err })
      }
      if(account){
        return res.status(200).json({ success: true, data: updateAccount })
      }
    }).catch(err => console.log(err)) 

  }
}



const readAdmin = (req, res, next)=>{

  Account.find({role: "Admin"},(err, accounts) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!accounts) {
      return res
      .status(404)
      .json({ success: false, error:err })
    }
    return res.status(200).json({ success: true, data: accounts })
  }).catch(err => console.log(err))
};

const readAll = (req, res, next)=>{
  Account.find({}, (err, accounts) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!accounts) {
      return res
      .status(404)
      .json({ success: false, error:err })
    }
    return res.status(200).json({ success: true, data: accounts })
  }).catch(err => console.log(err))
};
const deleteOne = (req, res, next)=>{
  var account_id = req.query.account_id;

  Account.findByIdAndDelete(account_id,function (err, account) {
    if(err)  {
        return res.status(400).json({ success: false, error: err })
      }
    else{

      if(account.role === "Competitor"){
        Competitor.findOneAndDelete({account_id:ObjectId(account_id)}, function (err) {
          if(err)  {
            return res.status(400).json({ success: false, error: err })
          }
          else{
            return res.status(200).json({ success: true })
          }
        });
      }
      else if(account.role === "Sponsor"){
        Sponsor.findOneAndDelete({account_id:ObjectId(account_id)}, function (err) {
          if(err)  {
            return res.status(400).json({ success: false, error: err })
          }
          else{
            return res.status(200).json({ success: true })
          }
        });
      }
      else if(account.role === "Judge"){
        Judge.findOneAndDelete({account_id:ObjectId(account_id)}, function (err) {
          if(err)  {
            return res.status(400).json({ success: false, error: err })
          }
          else{
            return res.status(200).json({ success: true })
          }
        });
      }
      else if(account.role === "Speaker"){
        Speaker.findOneAndDelete({account_id:ObjectId(account_id)}, function (err) {
          if(err)  {
            return res.status(400).json({ success: false, error: err })
          }
          else{
            return res.status(200).json({ success: true })
          }
        });
      }
      else if(account.role === "Visitor"){
        Visitor.findOneAndDelete({account_id:ObjectId(account_id)}, function (err) {
          if(err)  {
            return res.status(400).json({ success: false, error: err })
          }
          else{
            return res.status(200).json({ success: true })
          }
        });
      }
   }
});
}

module.exports = {register, login, read, update, readAdmin, readAll, deleteOne}
