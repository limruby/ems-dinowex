const Visitor = require('../models/visitor');
const qs = require('querystring');
const CryptoJS = require('crypto-js');
var ObjectId = require('mongodb').ObjectId;

var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

const create = (req, res, next) => {

  const account_id = req.body.account_id;
  const name = req.body.name;
  const gender = req.body.gender;
  const nric_passport_selection = req.body.nric_passport_selection;
  const nric_passport_no = req.body.nric_passport_no;
  const contact = req.body.contact;
  const address_1 = req.body.address_1;
  const address_2 = req.body.address_2;
  const postcode = req.body.postcode;
  const city = req.body.city;
  const state = req.body.state;
  const country = req.body.country;
  const receipt = req.body.receipt;
  const certificate = req.body.certificate;
  const bill_status = req.body.bill_status;

  const newVisitor = new Visitor({
    account_id,
    name,
    gender,
    nric_passport_selection,
    nric_passport_no,
    contact,
    receipt,
    certificate,
    bill_status,
    address_1,
    address_2,
    postcode,
    city,
    state,
    country,
  });

  newVisitor.save()
    .then(() => res.json(newVisitor))
    .catch(err => res.status(400).json('Error: ' + err));
};

const read = (req, res, next) => {
  var account_id = JSON.parse(req.query.account_id);
  Visitor.findOne({ account_id: ObjectId(account_id) }, (err, visitors) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!visitors) {
      return res
        .status(404)
        .json({ success: false, error: req.query.account_id })
    }
    return res.status(200).json({ success: true, data: visitors })
  }).catch(err => console.log(err))
};

const update = (req, res, next) => {
  var updateVisitor = {};
  if (req.body.name) {
    updateVisitor['name'] = req.body.name;
  }
  if(req.body.gender){
    updateVisitor['gender'] = req.body.gender;
  }
  if (req.body.nric_passport_selection) {
    updateVisitor['nric_passport_selection'] = req.body.nric_passport_selection;
  }
  if (req.body.nric_passport_no) {
    updateVisitor['nric_passport_no'] = req.body.nric_passport_no;
  }
  if (req.body.contact) {
    updateVisitor['contact'] = req.body.contact;
  }
  if (req.body.address_1) {
    updateVisitor['address_1'] = req.body.address_1;
  }
  if (req.body.address_2) {
    updateVisitor['address_2'] = req.body.address_2;
  }
  if (req.body.postcode) {
    updateVisitor['postcode'] = req.body.postcode;
  }
  if (req.body.city) {
    updateVisitor['city'] = req.body.city;
  }
  if (req.body.state) {
    updateVisitor['state'] = req.body.state;
  }
  if (req.body.country) {
    updateVisitor['country'] = req.body.country;
  }
  if (req.body.receipt_no) {
    updateVisitor['receipt_no'] = req.body.receipt_no;
  }
  if (req.body.receipt) {
    updateVisitor['receipt'] = req.body.receipt;
  }
  if (req.body.certificate) {
    updateVisitor['certificate'] = req.body.certificate;
  }
  if (req.body.bill_status) {
    updateVisitor['bill_status'] = req.body.bill_status;
  }
  if (req.body.bill_id) {
    updateVisitor['bill_id'] = req.body.bill_id;
  }
  Visitor.findByIdAndUpdate(req.body._id, updateVisitor, (err, visitors) => {
    if (err) {
      return res.status(400).json({ success: false, error: err, data: req.body })
    }
    if (visitors) {
      return res.status(200).json({ success: true, data: req.body })
    }
  }).catch(err => console.log(err))
};

const readAll = (req, res, next) => {
  Visitor.find({}, (err, visitors) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!visitors) {
      return res
        .status(404)
        .json({ success: false, error: req.query.account_id })
    }
    return res.status(200).json({ success: true, data: visitors })
  }).catch(err => console.log(err))
};
const updatePayment = (req, res, next) => {
  console.log(req.body.visitor_id)
  var visitor_id = req.body.visitor_id
  var updateVisitor = {}
  updateVisitor['bill_id'] = localStorage.getItem('bill_id')
  updateVisitor['bill_paid_at'] = localStorage.getItem('bill_paid_at')
  updateVisitor['bill_status'] = localStorage.getItem('bill_status')
  
  Visitor.findByIdAndUpdate(req.body.visitor_id, updateVisitor, (err, visitors) => {
    if (err) {
      return res.status(400).json({ success: false, error: err, data:req.body })
    }
    if(visitors){
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
  //  console.log(params)
const secret = process.env.BILLPLZ_SECRET 
const return_url = process.env.REACT_APP_RETURN_URL
// do a validation
const billplzId = "billplzid" + params['billplz[id]'];
const billplzPaidAt = "billplzpaid_at" + params['billplz[paid_at]'];
const billplzPaid = "billplzpaid" + params['billplz[paid]'];
const combineString = billplzId +  "|" + billplzPaidAt +  "|" + billplzPaid;
var hash = CryptoJS.HmacSHA256(combineString, secret).toString();
  //  console.log(billplzPaid)
  //  console.log(params['billplz[paid]'])
  //  console.log(params['billplz[x_signature]'] == hash)
  //  console.log(params['billplz[x_signature]'])
  //  console.log(hash);
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
module.exports = { create, read, update, readAll, pay, updatePayment }