import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Book } from "../entity/Book";

export class BookController {
  private bookRepository = AppDataSource.getRepository(Book);

  async getAllBooks(request: Request, response: Response, next: NextFunction) {
    return this.bookRepository.find({
      select: { id: true, name: true, author: true, publisher: true, year: true, score: true },
      where: { lendStatus: -1 },
    });
  }

  async getBook(request: Request, response: Response, next: NextFunction) {
    const id = parseInt(request.params.id);

    if (isNaN(id)) {
      response.status(400).send("Invalid book ID");
      return;
    }

    const book = await this.bookRepository.findOne({
      where: { id },
    });

    if (!book) {
      response.status(404).send({ message: "Unregistered book"});
      return;
    }

    const bookResponseModel = {
      id: book.id,
      name: book.name,
      author: book.author,
      publisher: book.publisher,
      year: book.year,
      score: book.score === "-1" ? Number(book.score) : book.score,
    };
    return bookResponseModel;
  }

  async borrowBook(request: Request, response: Response, next: NextFunction) {
    try {
      const userId = parseInt(request.params.id);
      const bookId = parseInt(request.params.bookId);

      const borrowRequestBook = await this.bookRepository.findOne({
        where: { id: bookId },
        relations: ["user"],
      });
      if (borrowRequestBook?.user) {
        response.status(404).send("Book already borrowed");
        return;
      }

      const updated = await this.bookRepository.update(bookId, {
        user: { id: userId },
        lendStatus: 0,
      });

      if (updated.affected) {
        response.status(204).send();
        return;
      }
      response.status(404).send();
      return;
    } catch (error) {
      console.log(error);
      response.status(500).send();
      return;
    }
  }

  async returnBook(request: Request, response: Response, next: NextFunction) {
     try {
      const score = request.body.score;
      const userId = parseInt(request.params.id);
      const bookId = parseInt(request.params.bookId);

      if (isNaN(userId) || isNaN(bookId)) {
        response.status(400).send('Invalid user ID or book ID');
        return
      }

      const existingBook = await this.bookRepository.findOne({
        where: { id: bookId, user: { id: userId } },
      });
      if (!existingBook) {
        response.status(404).send();
        return;
      }

      const newBook = await this.bookRepository.create({
        author: existingBook.author,
        name: existingBook.name,
        publisher: existingBook.publisher,
        user: { id: userId },
        year: existingBook.year,
        lendStatus: 1,
        score: score,
      });
      await this.bookRepository.save(newBook);

      const updated = await this.bookRepository.update(bookId, {
        user: { id: null },
        lendStatus: -1,
        score: score,
      });
      
      if (updated.affected) {
        response.status(204).send();
        return;
      }

      return;
    } catch (error) {
      console.log(error);
      response.status(500).send();
      return;
    }
  }
}
