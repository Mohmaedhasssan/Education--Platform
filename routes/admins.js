import { Router } from 'express';
import { index,add_department,add_doctor  } from '../controllers/admins.js';


const router = new Router();

router.get('/', index);
router.post('/add_department', add_department);
router.post('/add_doctor', add_doctor);



export default router;


