import { Router } from 'express';

const router: Router = Router();

import { booksController } from '../controllers/booksController'; 

// We list the books
router.get('/', booksController.indexBook );

// We render the books 
router.get('/add', booksController.renderBook );

// We add a book
router.post('/add', booksController.saveBook);

// We delete a book
router.delete('/delete/:id', booksController.deleteBook);

export default router;