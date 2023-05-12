import  express from "express";
import {engine} from 'express-handlebars';
import methodOverride from "method-override";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.mongoConnectionUrl)

import subjectsRouter from './routes/subjects.js'
import loginRouter from './routes/logins.js'
import adminRouter from './routes/admins.js'
import doctorRouter from './routes/doctors.js'
import studentRouter from './routes/students.js'
import departmentsRouter from './routes/departments.js'
import admins from "./models/admins.js";
import doctors from "./models/doctors.js";
import students from "./models/students.js";


const app = express();

app.use(express.urlencoded({extended:true}))

app.use(methodOverride('_method'))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.use('/departments',departmentsRouter)
app.use('/subjects',subjectsRouter)
app.use('/logins',loginRouter)

// app.get('/', async(req,res) => {
//     await admins.create({
//         name: 'Mr.Admin',
//         username: 'admin',
//         password: 'admin123',

//     });
//     await doctors.create({
//         name: 'Mr.Doctor',
//         username: 'Doctor',
//         password: 'Doctor123',
//         his_subjects:null,


//     });
//     await students.create({
//         name: 'Mr.student',
//         username: 'student',
//         password: 'student123',
//         academic_number:'200489',
//         department: null,
//         passed_subjects: null,
//         registered_subjects: null

//     });
//     console.log('Added');
// });

app.listen(process.env.port, () =>{
    console.log('started the application on http://localhost:' + process.env.port)
})