const Competitor = require('../models/competitor');
const Cart = require('../models/cart')
const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;
require('dotenv').config();


const addToCart = (req, res, next)=>{
    const account_id = req.body.account_id
    const product = req.body.product;
    const total_price = req.body.totalPrice;  
    
    const newCart = new Cart({
      account_id,
      product, 
      total_price,
    });
    newCart.save()
    .then(() => res.json(newCart))
    .catch(err => res.status(400).json('Error: ' + err));
}

const cancelCart = (req, res, next)=>{
  var _id = req.query._id;

  Cart.findByIdAndDelete(_id,function (err) {
    if(err)  {
        return res.status(400).json({ success: false, error: err })
      }
    else{
      return res.status(200).json({ success: true })
   }
});
}

const readCart = (req, res, next)=>{ 
  Cart.find({}, (err, cart) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!cart) {
      return res
      .status(404)
      .json({ success: false })
    }
    return res.status(200).json({ success: true, data: cart })
  }).catch(err => console.log(err))
};

module.exports = {addToCart, cancelCart, readCart}