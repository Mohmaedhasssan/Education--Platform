import admin from "../models/admins.js";
import department from "../models/departments.js";
import doctor from "../models/doctors.js";

export const index = async (req, res) => { 
    res.render('admins/index')
};

export const add_department = async (req, res) => { 
    const { name, code } = req.body;
    await department.create({
        name,
        code,
    })
    
    res.render('admins/index')
};
export const add_doctor = async (req, res) => { 
    const { doctor_name, doctor_username , doctor_password } = req.body;
    await doctor.create({
        name : doctor_name,
        username : doctor_username,
        password : doctor_password,
    })
    res.render('admins/index')
};