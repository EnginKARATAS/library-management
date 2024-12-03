import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Book } from "../entity/Book";

export class BookController {
  private bookRepository = AppDataSource.getRepository(Book);

  async getAllBooks(request: Request, response: Response, next: NextFunction) {
    return this.bookRepository.find({
      select: { id: true, name: true },
    });
  }

  async getBook(request: Request, response: Response, next: NextFunction) {
    const id = parseInt(request.params.id);

    const book = await this.bookRepository.findOne({
      select: { id: true, name: true, userScore: true },
      where: { id },
    });

    if (!book) {
      return "unregistered book";
    }
    const bookResponseModel = {
      id: book.id,
      name: book.name,
      score: book.userScore === "-1" ? Number(book.userScore) : book.userScore,//to comply given api response
    };
    return bookResponseModel;
  }

  async borrowBook(request: Request, response: Response, next: NextFunction) {
    return this.bookRepository.save(null);
  }

  async returnBook(request: Request, response: Response, next: NextFunction) {
    return this.bookRepository.save(null);
  }
}
