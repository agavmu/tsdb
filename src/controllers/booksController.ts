import {Request, Response } from 'express';

import Bookmodel, { Book } from '../models/Book'

class BooksController {

    public async indexBook(req: Request, res: Response):Promise<void> {
        const books: Book [] = await Bookmodel.find();
        res.render('books/index', {
            title: 'Books',
            books
        })
    }

    public renderBook (req: Request, res: Response): void {
        res.render('books/add', {
            title: 'Add a Book'
        });
    }

    public async saveBook (req: Request, res: Response) {
        const {title, author, isbn } = req.body;
        const book: Book = new Bookmodel({title, author, isbn });
        await book.save();
        res.redirect('/books');
    }
    
    public async deleteBook (req: Request, res: Response) {
        await Bookmodel.findByIdAndDelete(req.params.id);
        res.redirect('/books');
    }
}

export const booksController = new BooksController();