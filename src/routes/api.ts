import { Router } from 'express';
import ProductController from '../controllers/UserController';

const router = Router();

router.get('/', ProductController.index);
router.post('/', ProductController.store);

export default router;
