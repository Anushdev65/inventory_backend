const mongoose = require('mongoose');


let productSchema = new mongoose.Schema({
    id: String,
    title: {
        type: String,
        required: [true, "Tile is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]

    },

    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price cannot be less than 0"]
    },

    stock: {
        type: Number,
        min: [0, "Stock cannot be less than 0"]
    },

    brand: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    images: {
        type: String,

    }


})


const ProductModel = mongoose.model('product', productSchema);

module.exports = ProductModel