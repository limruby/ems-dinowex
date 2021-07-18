const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: false
    },
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

productSchema.insertMany([
    { name: 'Medal', price:50 },
    { name: 'Bookchapter', price:70 },
],
    { ordered: false }

).then(function () {
    console.log("Product inserted")  // Success
}).catch(function (error) {
    console.log(error)      // Failure
});

module.exports = Product;
