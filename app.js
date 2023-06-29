const express=require('express');
const morgan=require('morgan');
const app=new express();
var morgan = require('morgan');
app.use(morgan('dev'));
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport(transporter, {
   service: "hotmail",
   auth: {
        user: "karthik_node@outlook.com",
        pass: "Pheonix@123"
   } 
});
const options = {
    from: "karthik_node@outlook.com",
    to: "karthikv471@gmail.com",
    subject: "Sending email with node.js",
    text: "Its working"
}
transporter.sendMail(options, callback, function (err, info){
    if(err){
        console.log(err);
        return;
    }
    comsole.log("Sent: "+ info.response);
});