import subjects from "../models/subjects.js";
import department from "../models/departments.js";
export const index=async(req,res) => {
   
    const subject = await subjects.find({},{name:1}).lean();
    console.log(subject);

    res.render('subjects/index',{subject})
};
export const create=async(req,res)=>{
    const departments = await department.find().lean();
    
    res.render('subjects/create',{departments})
}
export const store = (req,res)=>{
    console.log(req.body);
}