import { Router } from 'express';
const router = Router();
import about from '../controllers/aboutController.js';


router.get("/", about);


export default router;