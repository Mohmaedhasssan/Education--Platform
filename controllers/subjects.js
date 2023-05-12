import subjects from "../models/subjects.js";
import departments from "../models/departments.js";
export const index=async(req,res) => {
   
    const subject = await subjects.find().lean();
    res.render('subjects/index',{subject})
};
export const create=async(req,res)=>{
    const department = await departments.find().lean();
    
    res.render('subjects/create',{department})
}
export const store = async(req,res)=>{
    const {name,code,pre_requisite,department}=req.body
    await subjects.create({
        name,
        code,
        pre_requisite,
        department
    });
    console.log(req.body);
    res.redirect('/subjects')
} 
export const show = async (req, res) => {
    const { _id } = req.params;
    // console.log(_id);
    const subject = await subjects.findById(_id).populate("department").lean();
    res.render('subjects/show', {subject})

};
export const edit=async(req,res)=>{
    const {_id} =req.params;

    const editFormSubject = await subjects.findById(_id).lean();

    const department = await departments.find().lean();
    res.render('subjects/edit',{department,subject:editFormSubject})
}
export const update=async(req,res)=>{
    const {name,code,pre_requisite,department}=req.body
    const{_id} =req.params;
    
    await subjects.findByIdAndUpdate(_id,{$set:{name,code,pre_requisite,department}})

    res.redirect('/subjects')
} 
export const deleteOne=async(req,res)=>{
    const{_id} =req.params;
    await subjects.findByIdAndDelete(_id)
    res.redirect('/subjects')
}