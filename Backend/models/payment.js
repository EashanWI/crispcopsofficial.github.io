const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
        name : {
            type : String,
            required: true
        },
        
        phone :{
            type : Number,
            required: true
        },
        address : {
            type : String,
            required : true
        },
        cardNo : {
            type : String,
            required :true
        },
        CVV : {
            type : Number,
            required: true
        },
        expDate :{
            type : String,
            required: true
        },
        city :{
            type : String,
            required: true
        }
    

    }
)

const payment = mongoose.model("payment",paymentSchema);

module.exports = payment;

