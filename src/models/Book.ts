import mongoose, { Schema, model } from 'mongoose';

// We validate the data
export interface Book extends mongoose.Document {
    title: String;
    author: String;
    isbn: String;
}

// Properties of books
const BookSchema = new Schema({
    title: String,
    author: String,
    isbn: String
});

export default model<Book>('Book', BookSchema);