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
  const company_address = req.body.company_address;
  const company_website = req.body.company_website;
  const company_logo = req.body.company_logo;

  const newSponsor = new Sponsor({
    account_id, 
    category,
    company_name, 
    company_pic_name, 
    company_pic_ic,
    company_contact, 
    company_address, 
    company_website, 
    company_logo
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



const readAll = (req, res, next)=>{ 
  Sponsor.find({}, (err, sponsors) => {
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
  if(req.body.company_address){
    updateSponsor['company_address'] = req.body.company_address;
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
      res.redirect(return_url+ 'payment_success');
    }
    else{
      res.redirect(return_url+ 'payment_fail')
    }
  }

  module.exports = {create, read, readAll, update, updatePayment, pay}

