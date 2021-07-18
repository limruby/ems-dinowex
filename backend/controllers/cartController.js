const Competitor = require('../models/competitor');
const Cart = require('../models/cart')
const Product = require('../models/product')
const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;
const qs = require('querystring');
const CryptoJS = require('crypto-js');
require('dotenv').config();

const addToCart = (req, res, next)=>{
    const account_id = req.body.account_id
    const product = req.body.product;
    const totalPrice = req.body.totalPrice;  
    
    localStorage.setItem('cartItems', JSON.stringify(product));
}
const removeCart = (req, res, next)=>{
    const product = req.body.product;
    const totalPrice = req.body.totalPrice;
    
    
    localStorage.setItem('cartItems', JSON.stringify(product));
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
if(params['billplz[paid]'] === "true" && params['billplz[x_signature]'] === hash){
  localStorage.setItem('bill_id',params['billplz[id]'])
  localStorage.setItem('bill_paid_at',params['billplz[paid_at]'])
  localStorage.setItem('bill_status', params['billplz[paid]'])
  res.redirect('http://vexs.fsktm.um.edu.my/payment_success');
}
else{
  res.redirect('http://vexs.fsktm.um.edu.my/payment_fail')
}
}

module.exports = {}