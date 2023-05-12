import { Schema,model } from "mongoose";
const student = new Schema(
    {
name : {
    type : String,
    required: true,
},
username : {
    type : String,
    required: true,
},
password : {
    type : String,
    required: true,
},
academic_number : {
    type : String,
    required: true,
},
department: {
    type: Schema.Types.ObjectId,
    required: false,
    ref : 'department'
},
passed_subjects : {
    type : [String],
    required: false,
    ref : 'subject'
},
registered_subjects : {
    type : [String],
    required: false,
    ref : 'subject'

},
}, { timestamps:true});
export default model('student',student);