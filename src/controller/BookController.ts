import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Book } from "../entity/Book";

export class BookController {
  private bookRepository = AppDataSource.getRepository(Book);

  async getAllBooks(request: Request, response: Response, next: NextFunction) {
    return this.bookRepository.find();
  }

  async getBook(request: Request, response: Response, next: NextFunction) {
    const id = parseInt(request.params.id);

    const book = await this.bookRepository.findOne({
      where: { id },
    });

    if (!book) {
      return "unregistered book";
    }
    return book;
  }

  async borrowBook(request: Request, response: Response, next: NextFunction) {
    return this.bookRepository.save(null);
  }

  async returnBook(request: Request, response: Response, next: NextFunction) {
    return this.bookRepository.save(null);
  }
}
