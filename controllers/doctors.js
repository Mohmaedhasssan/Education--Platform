import admin from "../models/doctors.js";
export const index = async (req, res) => { 
    res.render('doctors/index')
};