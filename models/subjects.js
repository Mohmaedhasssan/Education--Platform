import { Schema,model } from "mongoose";
const subject = new Schema(
    {
name : {
    type : String,
    required: true,
},
code : {
    type : String,
    required: true,
},
department: {
    type: Schema.Types.ObjectId,
    required: false,
    ref : 'department'
},
pre_requisite : {
    type : String,
    required: false,
},
doctor :{
    type: Schema.Types.ObjectId,
    required: false,
    ref : 'doctor'
}
}, { timestamps:true});
export default model('subject',subject);