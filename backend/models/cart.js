const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    account_id: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Account' }],
        required: true
    },
    nedalQuantity:{
        type:Number,
        required:true
    },
    bookQuantity:{
        type:Number,
        required:true
    },
    total_price:{
        type:Number,
        required: true
    },
    bill_id: {
        type: String,
    },
    bill_paid_at: {
        type: String,
    },
    bill_status: {
        type: String,
    },

}, {
    timestamps: true,
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;