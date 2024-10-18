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

})

const todoSchema =  new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    title : {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxLength: 50,
    } ,

    description : {
        type : String,
        trim: true ,
         
    }
})

const User = mongoose.model('User', userSchema);
const Todo = mongoose.model('Todo', todoSchema )
export { User, Todo };
