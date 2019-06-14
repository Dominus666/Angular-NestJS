import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LibraryModule } from './library/library.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Dominus666:Bm48Ks23@cluster0-gnfky.mongodb.net/Library?retryWrites=true', { useNewUrlParser: true }),
    LibraryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
