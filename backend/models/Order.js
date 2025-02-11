const mongoose = require("mongoose");
const Product = require("./Product");

const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },

    orderedItems:[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Product',
                required:true
            },
            quantiy:{type:number, required:true},
            price: {type:number , required:true}
        }
    ],

    shippingAddress:{
        address:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },

        Pincode:{
            type:String,
            required:true
        },
        country:{
            type:String,
            required:true
        }
    },
    paymentMethod:{
        type:String,
        required:true
    },

    paymentResult:{
        id:String,
        status:String,
        update_time:String,
        email_address:String
    },
    totalPrice:{
        type:Number,
        required:true,
    },
    isPaid:{
        type:Boolean,
        required:true,
        default:false
    },
    paidAt:{
        type:Date
    },
    isDelivered:{
        type:Boolean,
        required:true,
        default:false

    },
    deliveredOn:{
        type:Date
    }



},{timestamps : true});

module.exports = mongoose.model('Order',orderSchema);