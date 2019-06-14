import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from '../interfaces';
import { CreateBookDTO } from '../dto';

@Injectable()

export class BookService {
    constructor(@InjectModel('Books') private readonly bookModel: Model<Book>) { }
    async getBooks(): Promise<Book[]> {
        const books = await this.bookModel.find().exec(); 
        return books;
    }
    async addBook(createBookDTO: CreateBookDTO): Promise<Book> {
        const newBook = await new this.bookModel(createBookDTO);
        return newBook.save();
    }
    async getBook(bookID): Promise<Book> {
        const book = await this.bookModel.findById(bookID).exec();
        return book;
    }
    
}