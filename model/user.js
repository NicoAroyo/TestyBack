import mongoose from "mongoose";


const userScheme = new mongoose.Schema({
   
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

export default mongoose.model("User", userScheme);
