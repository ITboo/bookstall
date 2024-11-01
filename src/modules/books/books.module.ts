import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { BooksRepository } from './books.repository';

@Module({
  imports:[TypeOrmModule.forFeature([Book])],
  providers: [BooksService, BooksRepository],
  controllers: [BooksController]
})
export class BooksModule {}
