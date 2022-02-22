const mongoose = require('mongoose');

const uploadSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    }
})
uploadModel = mongoose.model('images',uploadSchema);

module.exports = uploadModel;
