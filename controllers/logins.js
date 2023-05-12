import admin from "../models/admins.js";
import doctor from "../models/doctors.js";
import student from "../models/students.js";

export const index = async (req, res) => { 
    res.render('logins/index')
};

export const store = async (req, res) => {
    const { username, password, type } = req.body;
   
    if (type ==='admin'){
        const admins = await admin.find().lean();
        console.log(admins)

    }
    else if (type ==='doctor'){
        const doctors = await doctor.find().lean();
        console.log(doctors)

    }
    else
    {
        const students = await student.find().lean();
        console.log(students)

    }


};
