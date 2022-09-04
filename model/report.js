import mongoose from "mongoose";
import user from "./user.js";

const reportScheme = new mongoose.Schema({
    
    grade :
    {
        required: true,
        type: Number
    },
    studentId: 
    {
        required: true,
        type: String
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