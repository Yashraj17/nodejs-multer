const mongoose = require('mongoose')

const connectDb = async (url) =>{
    try {
        mongoose.connect(url);
        console.log('db connected');
    } catch (error) {
        console.log('db not connected');
    }
}
module.exports = connectDb