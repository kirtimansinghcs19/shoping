const express = require("express");
const cors = require("cors");
const { application } = require("express");
const { v4: uuidv4 } = require('uuid');
const stripe = require("stripe")("sk_test_51KqslFSJrNrNB0WdvSE4s9BNXTi7nKl62ULkppAZtsfpffc1U7KL2awhwOaqvClrM5d6CVlPwygt5ZKiZt4plLbp00D8Ewn4OO");
const app = express();
app.use(cors());
app.use(express.json());
app.get("/",(req,res) =>{
    res.send('Home Welcome into react shop website');
});
app.post('/checkout',async (req,res)=>{
    let error;
    let status;
    try{
        const {product,token} = req.body;
        const customer = await stripe.customer.create({
            email:token.email,
            source:token.id
        })
        const key = uuidv4();
        const charge = await stripe.charges.create({
            amount:product.price*100,
            currency:"usd",
            customer:customer.id,
            receipt_email:token.email,
            description:'all products description',
            shipping:{
                name:token.card.name,
                address:{
                    line1: token.card.address_line1,
                    line2:token.card.address_line2,
                    city:token.card.address.city,
                    country:token.card.address_country,
                    postal_code:token.card.address_zip
                }
            }
        },{idempotencyKey:key})
        status = "success";
    }
    catch(error){
        console.log(error);
        status = "error";
    }
    res.json({status});
});
app.listen(5000,()=>{
    console.log('Your app is running on port number 5000');
});
