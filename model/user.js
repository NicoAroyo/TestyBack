import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
<<<<<<< HEAD
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  isAdmin: {
    required: true,
    type: Boolean,
    default: false,
  },
  testTaken: {
    required: false,
    type: Array,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: Number,
  },
});
=======
   
    firstName : {
        required: true,
        type: String
    },
    lastName : {
        required: true,
        type : String,
    },
    isAdmin : {
        required : true,
        type : Boolean,
        default : false,
    },
    testTaken: {
        required: false,
        type : Array
    },
    email : {
        required: true,
        type:String,

    },
    password : {
        required:true,
        type: String,
    }
    

}
);
>>>>>>> 4b46555ae0ef8d214c0afc2cda7b347c5a4217a5

export default mongoose.model("User", userScheme);
