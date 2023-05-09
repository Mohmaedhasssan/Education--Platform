import departments from "../models/departments.js";
export const index=async(req,res) => {
   
    const department = await departments.find().lean();

    res.render('departments/index',{department})
};
export const create=async(req,res) => {
    await departments.create({
        name:'Computer Science',
        code:'CS'
    });
    await departments.create({
        name:'Information System',
        code:'IT'
    });
    await departments.create({
        name:'Information Technology',
        code:'IS'
    });
    res.send('Added')
};