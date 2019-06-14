import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookController, UserController, AuthorController } from './controllers';
import { BookModel, UserModel, AuthorModel } from './schemas/';
import { BookService, UserService, AuthorService } from './services'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Books', schema:  BookModel }]),
    MongooseModule.forFeature([{ name: 'Users', schema:  UserModel }]),
    MongooseModule.forFeature([{ name: 'Authors', schema:  AuthorModel }])
  ],
  providers: [
    BookService,
    UserService,
    AuthorService
  ],
  controllers: [
    BookController,
    UserController,
    AuthorController
  ]
})
export class LibraryModule {}

