const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb+srv://thien:Thienthien1406%40@cluster0.4tx7cf9.mongodb.net/').on('open',()=>{
    console.log("MongoDB Connected");   
}).on('error',(err)=>{
    console.error('❌ MongoDB connection error:', err);
});
module.exports = connection;