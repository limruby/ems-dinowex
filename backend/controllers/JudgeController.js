const Judge = require('../models/judge');
var ObjectId = require('mongodb').ObjectId;
const qs = require('querystring');
const CryptoJS = require('crypto-js');
require('dotenv').config();
var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

const create = (req, res, next)=>{

  const account_id = req.body.account_id;
  const title = req.body.title;
  const name = req.body.name;
  const phone_no = req.body.phone_no;
  const affiliation = req.body.affiliation;
  const email=req.body.email;
  const address_1 = req.body.address_1;  
  const address_2 = req.body.address_2;
  const postcode = req.body.postcode;
  const city = req.body.city;
  const state = req.body.state;
  const country = req.body.country;
  

  const newJudge = new Judge({
    account_id, 
    title,
    name, 
    phone_no,
    affiliation,
    email,
    address_1,
    address_2,
    postcode,
    city,
    state,
    country,
  });

  newJudge.save()
  .then(() => res.json(newJudge))
  .catch(err => res.status(404).json('Error here:' + err));
};



const read = (req, res, next)=>{
  var account_id = JSON.parse(req.query.account_id);
  Judge.findOne({account_id: ObjectId(account_id)}, (err, judge) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!judge) {
      return res
      .status(404)
      .json({ success: false, error: req.query.account_id })
    }
    return res.status(200).json({ success: true, data: judge })
  }).catch(err => console.log(err))
};



const readAll = (req, res, next)=>{ 
  Judge.find({}, (err, judge) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!judge) {
      return res
      .status(404)
      .json({ success: false, error: req.query.account_id })
    }
    return res.status(200).json({ success: true, data: judge })
  }).catch(err => console.log(err))
};






  module.exports = {create, read, readAll}

