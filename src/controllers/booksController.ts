import {Request, Response } from 'express';
import Bookmodel, { Book } from '../models/Book'

// Controller of Books 
class BooksController {

    // We create a list of books
    public async indexBook(req: Request, res: Response):Promise<void> {
        const books: Book [] = await Bookmodel.find();
        res.render('books/index', {
            title: 'Books',
            books
        })
    }
    
    // We render a book
    public renderBook (req: Request, res: Response): void {
        res.render('books/add', {
            title: 'Add a Book'
        });
    }

    // We save a book
    public async saveBook (req: Request, res: Response) {
        const {title, author, isbn } = req.body;
        const book: Book = new Bookmodel({title, author, isbn });
        await book.save();
        res.redirect('/books');
    }
    
    // We delete a book
    public async deleteBook (req: Request, res: Response) {
        await Bookmodel.findByIdAndDelete(req.params.id);
        res.redirect('/books');
    }
}

export const booksController = new BooksController();