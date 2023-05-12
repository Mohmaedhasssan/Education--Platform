import { Router } from 'express';
import { index,store } from '../controllers/logins.js';


const router = new Router();


router.get('/', index);
router.post('/', store);



export default router;