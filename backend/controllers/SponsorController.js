const Sponsor = require('../models/sponsor');
var ObjectId = require('mongodb').ObjectId;
const qs = require('querystring');
const CryptoJS = require('crypto-js');
require('dotenv').config();
var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');
const create = (req, res, next)=>{
  const account_id = req.body.account_id;
  const category = req.body.category;
  const company_name = req.body.company_name;
  const company_pic_name = req.body.company_pic_name;
  const company_pic_ic = req.body.company_pic_ic;
  const company_contact = req.body.company_contact;
  const address_1 = req.body.address_1;  
  const address_2 = req.body.address_2;
  const postcode = req.body.postcode;
  const city = req.body.city;
  const state = req.body.state;
  const country = req.body.country;
  const company_website = req.body.company_website;
  const company_logo = req.body.company_logo;
  const receipt = req.body.receipt;
  const certificate = req.body.certificate;
  const bill_status = req.body.bill_status;
  const newSponsor = new Sponsor({
    account_id, 
    category,
    company_name, 
    company_pic_name, 
    company_pic_ic,
    company_contact,  
    company_website, 
    company_logo,
    receipt,
    certificate,
    address_1,
    address_2,
    postcode,
    city,
    state,
    country,
    bill_status,
  });
  newSponsor.save()
  .then(() => res.json(newSponsor))
  .catch(err => res.status(400).json('Error: ' + err));
};
const read = (req, res, next)=>{
  var account_id = JSON.parse(req.query.account_id);
  Sponsor.findOne({account_id: ObjectId(account_id)}, (err, sponsors) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!sponsors) {
      return res
      .status(404)
      .json({ success: false, error: req.query.account_id })
    }
    return res.status(200).json({ success: true, data: sponsors })
  }).catch(err => console.log(err))
};
const readVIP = (req, res, next)=>{
  Sponsor.findOne({category: "VIP Package"}, {account_id: 1}, (err, sponsors) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!sponsors) {
      return res
      .status(404)
      .json({ success: false })
    }
    return res.status(200).json({ success: true, data: sponsors })
  }).catch(err => console.log(err))
};
const readAll = (req, res, next)=>{ 
  Sponsor.find({}, {
    poster: 0,
  }, (err, sponsors) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!sponsors) {
      return res
      .status(404)
      .json({ success: false, error: req.query.account_id })
    }
    return res.status(200).json({ success: true, data: sponsors })
  }).catch(err => console.log(err))
};
const update = (req, res, next)=>{
  var updateSponsor = {};
  if(req.body.company_name){
    updateSponsor['company_name'] = req.body.company_name;
  }
  if(req.body.company_pic_name){
    updateSponsor['company_pic_name'] = req.body.company_pic_name;
  }
  if(req.body.company_pic_ic){
    updateSponsor['company_pic_ic'] = req.body.company_pic_ic;
  }
  if(req.body.company_contact){
    updateSponsor['company_contact'] = req.body.company_contact;
  }
  if(req.body.address_1){
    updateSponsor['address_1'] = req.body.address_1;
  }
  if(req.body.address_2){
    updateSponsor['address_2'] = req.body.address_2;
  }
  if(req.body.postcode){
    updateSponsor['postcode'] = req.body.postcode;
  }
  if(req.body.city){
    updateSponsor['city'] = req.body.city;
  }
  if(req.body.state){
    updateSponsor['state'] = req.body.state;
  }
  if(req.body.country){
    updateSponsor['country'] = req.body.country;
  }
  if(req.body.company_website){
    updateSponsor['company_website'] = req.body.company_website;
  }
  if(req.body.company_logo){
    updateSponsor['company_logo'] = req.body.company_logo;
  }
  if(req.body.poster){
    updateSponsor['poster'] = req.body.poster;
  }
  if(req.body.video){
    updateSponsor['video'] = req.body.video;
  }    
  if(req.body.category){
    updateSponsor['category'] = req.body.category;
  }      
  if(req.body.amount){
    updateSponsor['amount'] = req.body.amount;
  }
  if(req.body.receipt){
    updateSponsor['receipt'] = req.body.receipt;
  } 
  if(req.body.certificate){
    updateSponsor['certificate'] = req.body.certificate;
  }
  if (req.body.bill_status) {
    updateSponsor['bill_status'] = req.body.bill_status;
  }
  if (req.body.bill_id) {
    updateSponsor['bill_id'] = req.body.bill_id;
  }

  Sponsor.findByIdAndUpdate(req.body._id, updateSponsor, (err, sponsors) => {
    if (err) {
      return res.status(400).json({ success: false, error: err, data:req.body })
    }
    if(sponsors){
      return res.status(200).json({ success: true, data: req.body })
    }
  }).catch(err => console.log(err))
};
const updatePayment = (req, res, next) => {
  console.log(req.body.sponsor_id)
  var sponsor_id = req.body.sponsor_id
  var updateSponsor = {}
  updateSponsor['bill_id'] = localStorage.getItem('bill_id')
  updateSponsor['bill_paid_at'] = localStorage.getItem('bill_paid_at')
  updateSponsor['bill_status'] = localStorage.getItem('bill_status')
  Sponsor.findByIdAndUpdate(req.body.sponsor_id, updateSponsor, (err, sponsors) => {
    if (err) {
      return res.status(400).json({ success: false, error: err, data:req.body })
    }
    if(sponsors){
      return res.status(200).json({ success: true, data: req.body })
    }
  }).catch(err => console.log(err))
}
const pay = (req, res, next) => {
       // extract POST data from billplz
       var url = req.protocol + '://' + req.get('host') + req.originalUrl;
       var res_string = url.split('?');
       var queryString=res_string[1];
       const params = qs.parse(queryString)
       console.log(params)
    const secret = process.env.BILLPLZ_SECRET 
    const return_url = process.env.REACT_APP_RETURN_URL
    // do a validation
    const billplzId = "billplzid" + params['billplz[id]'];
    const billplzPaidAt = "billplzpaid_at" + params['billplz[paid_at]'];
    const billplzPaid = "billplzpaid" + params['billplz[paid]'];
    const combineString = billplzId +  "|" + billplzPaidAt +  "|" + billplzPaid;
    var hash = CryptoJS.HmacSHA256(combineString, secret).toString();
    console.log(billplzPaid)
    console.log(params['billplz[paid]'])
    console.log(params['billplz[x_signature]'] == hash)
    console.log(params['billplz[x_signature]'])
    console.log(hash);
    //isPaid?
    if(params['billplz[paid]'] === "true" && params['billplz[x_signature]'] === hash){
      localStorage.setItem('bill_id',params['billplz[id]'])
      localStorage.setItem('bill_paid_at',params['billplz[paid_at]'])
      localStorage.setItem('bill_status', params['billplz[paid]'])
      res.redirect('https://vexsdev.fsktm.um.edu.my/payment_success');
    }
    else{
      res.redirect('https://vexsdev.fsktm.um.edu.my/payment_fail')
    }
  }
  module.exports = {create, read, readVIP, readAll, update, updatePayment, pay}
