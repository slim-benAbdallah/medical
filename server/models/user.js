const mongoose = require('mongoose');

let userSchema = new mongoose.Schema('User',{
    id:{
        type:String,
        required: true
    },
    name:{
        type: String ,
        required: true
    },
    phone:{
        type: String,
        required: true,
        maxlength: (8)

    },
    email:{
        type:String,
        required :email
    },
    password:{
        type: String,
        required: true,
        minlength: (5, 'mot de passe minimum 5 caractère'),
    },
    saltSecret: String
});


module.exports = mongoose.model('User', userSchema);