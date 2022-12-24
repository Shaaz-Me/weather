import { Router } from 'express';
const router = Router();
import home from '../controllers/homeController.js';


router.get("/", home);



export default router;