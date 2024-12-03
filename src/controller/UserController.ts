import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";

export class UserController {
  private userRepository = AppDataSource.getRepository(User);

  async getAllUsers(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.find();
  }

  async getUser(request: Request, response: Response, next: NextFunction) {
    const id = parseInt(request.params.id);
    
   /*bad performance
    const user = await this.userRepository.findOne({
         relations: {
            books: true
        },
        where: { id }
    })
    */

    //good performance
    const user: User = await this.userRepository
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.books", "book")
      .select([
        "user.id",
        "user.name",
        "book.name",
        "book.userScore",
        "book.lendStatus",
      ])
      .where("user.id = :id", { id })
      .getOne();

    if (!user) {
      return "unregistered user";
    }
    const userBook = {
      id: user.id,
      name: user.name,
      books: {
        past: user.books
          .filter((book) => book.lendStatus == 1)
          .map((book) => {return {name: book.name, userScore: book.userScore}}),
        present: user.books
          .filter((book) => book.lendStatus == 0)
          .map((book) => {return {name: book.name, userScore: book.userScore}}),
      },
    };
    return userBook;
  }
}
