import { Router } from 'express';
const router = Router();
import weatherController from '../controllers/weatherController.js';


router.get("/", weatherController.getPage);
router.post("/",weatherController.getDetails);



export default router;