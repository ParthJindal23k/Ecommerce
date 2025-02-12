
const mongoose = require("mongoose");
const Product = require("./Product");
const User = require("./User");

const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    orderItems :[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Product',
                required:true
            },
            quantity:{type:Number,required:true},
            price:{type:Number,required:true},
        }
    ],

    shippingAddress:{
        Country:{type:String,required:true},
        State:{type:String,required:true},
        city:{type:String,required:true},
        pincode :{type:Number,required:true},
        address: {type:String,require:true,}
    },

    paymentresult:{
        type:String,
        status:String,
        updateTime:String,
        email_address:String
    },

    totalPrice:{
        type:Number,
        required:true
    },

    isPaid:{
        type:Boolean,
        required:true,
        default:false
    },
    paidAt:{
        type:Date
     },


},{timestamps:true});

module.exports = mongoose.model('Order',orderSchema);