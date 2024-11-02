import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Get()
  async getAllBooks() {
    return this.booksService.getAllBooks();    
  }

  @Get(':id')
  async getBookById(@Param('id') id: number) {
    return this.booksService.getBookById(id); 
  }

  @Post()
  @HttpCode(201)
  async createBook(@Body() bookDto: any) {
    return this.booksService.createBook(bookDto);
  }

  @Put(':id')
  async updateBook(@Param('id') id: number, @Body() bookDto:any) {}

  @Delete(':id')
  async deleteBook(@Param('id') id: number) {}
}
