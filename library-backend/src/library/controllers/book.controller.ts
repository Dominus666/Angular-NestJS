import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { BookService } from '../services';
import { CreateBookDTO } from '../dto/create-book.dto';

@Controller()
export class BookController {
    constructor(private bookService: BookService) { }
    @Get('/books')
    async getBooks(@Res() res) {
        const books = await this.bookService.getBooks();
        return res.status(HttpStatus.OK).json(books);
    }
    @Post('/books/book')
    async addBook(@Res() res, @Body() createBookDTO: CreateBookDTO) {
        const newBook = await this.bookService.addBook(createBookDTO);
        return res.status(HttpStatus.OK).json({
            message: "Book has been submitted successfully!",
            book: newBook
        })
    }
    @Get('books/:bookID')
    async getPost(@Res() res, @Param('bookID') bookID) {
        const book = await this.bookService.getBook(bookID);
        if (!book) throw new NotFoundException('Post does not exist!');
        return res.status(HttpStatus.OK).json(book);
    }
    
}