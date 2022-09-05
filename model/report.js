import mongoose from "mongoose";
import user from "./user.js";

const reportScheme = new mongoose.Schema({
    
    grade :
    {
        required: true,
        type: Number
    },
    student: 
    {
        required: true,
        type: Object
    },
    quizId : {

        required: true,
        type: String
    },
    date :{
        required : false,
        type: Date,
        default : Date.now(),
    }

});

export default mongoose.model("Report", reportScheme);