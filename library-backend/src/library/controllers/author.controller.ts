import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { AuthorService } from '../services';
import { CreateAuthorDTO } from '../dto'


@Controller()
export class AuthorController {
    constructor(private authorService: AuthorService) { }
    @Get('/authors')
    async getAuthors(@Res() res) {
        const authors = await this.authorService.getAuthors();
        return res.status(HttpStatus.OK).json(authors);
    }
    @Post('/authors/author')
    async addAuthor(@Res() res, @Body() createAuthorDTO: CreateAuthorDTO) {
        const newAuthor = await this.authorService.addAuthor(createAuthorDTO);
        return res.status(HttpStatus.OK).json({
            message: "Author has been submitted successfully!",
            author: newAuthor
        })
    }
}