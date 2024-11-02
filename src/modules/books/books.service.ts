import { Injectable } from '@nestjs/common';
import { BooksRepository } from './books.repository';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
  constructor(private readonly booksRepository: BooksRepository) {}
  async getAllBooks(): Promise<Book[]> {
    return this.booksRepository.findAll();
  }
  async getBookById(id: number): Promise<Book> {
    return this.booksRepository.findOneOrNotFoundFail(id);
  }
  async createBook(dto: any): Promise<void> {
    const book: Book = new Book();
    book.title = dto.title;
    book.ageRestriction = dto.ageRestriction;
    book.author = dto.author;

    await this.booksRepository.save(book);
  }
}
