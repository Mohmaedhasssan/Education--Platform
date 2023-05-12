import admin from "../models/students.js";
export const index = async (req, res) => { 
    res.render('students/index')
};