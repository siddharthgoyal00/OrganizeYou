import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://admin:fvmQ1D2B6iDKmUM6@cluster0.ztkcnap.mongodb.net/OrganizeYou");
const userSchema = new mongoose.Schema({

    email: {
     type: String,
     required: true,
     unique: true,
     lowerCase: true,
     trim: true,
     maxLength: 40,
    },

    password:{
     type:String,
     required:true,
     minLength:6,
    },

    firstName:{ 
        type:String,
        required: true,
        trim:true,
        maxLenght: 20
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
        maxLength:20
    }

});

const User = mongoose.model('User', userSchema);
export { User };
