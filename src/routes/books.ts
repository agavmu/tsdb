import { Router } from 'express';

const router: Router = Router();

import { booksController } from '../controllers/booksController'; 

router.get('/', booksController.indexBook );
router.get('/add', booksController.renderBook );
router.post('/add', booksController.saveBook);
router.delete('/delete/:id', booksController.deleteBook);

export default router;