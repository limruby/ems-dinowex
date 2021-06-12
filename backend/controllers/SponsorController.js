const Sponsor = require('../models/sponsor');
// const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;
<<<<<<< HEAD
const qs = require('querystring');
const CryptoJS = require('crypto-js');

<<<<<<< HEAD
<<<<<<< HEAD
var LocalStorage = require('node-localstorage').LocalStorage,
  localStorage = new LocalStorage('./scratch');
  
=======
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
var upload = multer({ storage: storage })

>>>>>>> 86840ba (upload file function)
=======
>>>>>>> 67436a0 (delete code)
=======

>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
const create = (req, res, next)=>{

  const account_id = req.body.account_id;
  const category = req.body.category;
  const company_name = req.body.company_name;
  const company_pic_name = req.body.company_pic_name;
<<<<<<< HEAD
  const company_pic_ic = req.body.company_pic_ic;
=======
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
  const company_contact = req.body.company_contact;
  const company_address = req.body.company_address;
  const company_website = req.body.company_website;
  const company_logo = req.body.company_logo;

    const newSponsor = new Sponsor({
    account_id, 
    category,
    company_name, 
    company_pic_name, 
<<<<<<< HEAD
    company_pic_ic,
=======
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
    company_contact, 
    company_address, 
    company_website, 
    company_logo
    });

    newSponsor.save()
<<<<<<< HEAD
      .then(() => res.json(newSponsor))
=======
      .then(() => res.json('New Sponsor Created!'))
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
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

<<<<<<< HEAD
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
=======

>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed


const update = (req, res, next)=>{

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d6169f2 (sponsor edit profile can fetch data)
=======
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
      var updateSponsor = {};

      if(req.body.company_name){
        updateSponsor['company_name'] = req.body.company_name;
      }
      if(req.body.company_pic_name){
        updateSponsor['company_pic_name'] = req.body.company_pic_name;
      }
<<<<<<< HEAD
<<<<<<< HEAD
      if(req.body.company_pic_ic){
        updateSponsor['company_pic_ic'] = req.body.company_pic_ic;
      }
=======
>>>>>>> d6169f2 (sponsor edit profile can fetch data)
=======
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
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
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
    const account_id = req.body.account_id;
    const category = req.body.category;
    const company_name = req.body.company_name;
    const company_pic_name = req.body.company_pic_name;
    const company_contact = req.body.company_contact;
    const company_address = req.body.company_address;
    const company_website = req.body.company_website;
    const company_logo = req.body.company_logo;
    const poster = req.body.poster;
    const video = req.body.video;

  const newSponsor = new Sponsor({
    account_id, 
    category,
    company_name, 
    company_pic_name, 
    company_contact, 
    company_address, 
    company_website, 
    company_logo,
    poster,
    video,
    });

    newSponsor.save()
      .then(() => res.json('Sponsor Created!'))
      .catch(err => res.status(400).json('Error: ' + err));


    Sponsor.findByIdAndUpdate(req.body._id, newSponsor, (err, sponsors) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        
        return res.status(200).json({ success: true, data: sponsors })
>>>>>>> 7c0a793 (merged with alexia's branch)
    }).catch(err => console.log(err))
    
    }
     
     const pay = (req, res, next) => {
       // extract POST data from billplz
       var url = req.protocol + '://' + req.get('host') + req.originalUrl;
       var res_string = url.split('?');
       var queryString=res_string[1];
       const params = qs.parse(queryString)
        console.log(params)
      
    // do a validation
    const billplzId = "billplzid" + params['billplz[id]'];
       const billplzPaidAt = "billplzpaid_at" + params['billplz[paid_at]'];
       const billplzPaid = "billplzpaid" + params['billplz[paid]'];
       const combineString = billplzId +  "|" + billplzPaidAt +  "|" + billplzPaid;
       var hash = CryptoJS.HmacSHA256(combineString, "S-B3mEu_juz3G2q2IlEfYmmw").toString();
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
      res.redirect('http://localhost:3000/payment_success');
     }
     else{
      res.redirect('http://localhost:3000/payment_fail')
     }
    }

module.exports = {create, read, readAll, update, updatePayment, pay}
=======
>>>>>>> d6169f2 (sponsor edit profile can fetch data)

<<<<<<< HEAD
=======
module.exports = {create, read, update}

>>>>>>> d526164 (upload sponsor company logo)
=======

module.exports = {create, read, update}

>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
