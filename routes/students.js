import { Router } from 'express';
import { index, register_page, student_register1, student_register2, student_register3, student_register4, student_register5, student_register6, upload_page,  } from '../controller/student.js';


const router = new Router();

router.get('/', index);
router.get('/register', register_page);
router.get('/upload', upload_page);
router.post('/student_register1', student_register1);
router.post('/student_register2', student_register2);
router.post('/student_register3', student_register3);
router.post('/student_register4', student_register4);
router.post('/student_register5', student_register5);
router.post('/student_register6', student_register6);





export default router;