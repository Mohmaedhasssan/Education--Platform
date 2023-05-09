import { Router } from "express";
import { create, index } from "../controllers/departments.js";

const router = new Router();

router.get('/', index);
router.get('/create_departments', create);

export default router;