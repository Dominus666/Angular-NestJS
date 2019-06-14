import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Author } from '../interfaces';
import { CreateAuthorDTO } from '../dto';

@Injectable()

export class AuthorService {
    constructor(@InjectModel('Authors') private readonly authorModel: Model<Author>) { }
    async getAuthors(): Promise<Author[]> {
        const authors = await this.authorModel.find().exec(); 
        return authors;
    }
    async addAuthor(createAuthorDTO : CreateAuthorDTO ): Promise<Author> {
        const newAuthor = await new this.authorModel(createAuthorDTO);
        return newAuthor.save();
    }
}