import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { Routes } from "./routes";
import { User } from "./entity/User";
import { Book } from "./entity/Book";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    const cors = require("cors");
    app.use(cors());
    app.use(bodyParser.json());

    Routes.forEach((route) => {
      (app as any)[route.method](
        route.route,
        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next
          );
          if (result instanceof Promise) {
            result.then((result) =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined
            );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });

    app.listen(3000);

    await AppDataSource.manager.save(
      AppDataSource.manager.create(User, {
        name: "Engin Karataş",
      })
    );
    await AppDataSource.manager.save(
      AppDataSource.manager.create(User, {
        name: "Jane Doe",
      })
    );
    await AppDataSource.manager.save(
      AppDataSource.manager.create(User, {
        name: "Alice Johnson",
      })
    );
    await AppDataSource.manager.save(
      AppDataSource.manager.create(User, {
        name: "Bob Smith",
      })
    );
    await AppDataSource.manager.save(
      AppDataSource.manager.create(User, {
        name: "Eve Brown",
      })
    );

    const book1 = AppDataSource.manager.create(Book, {
      author: "Stephen King",
      name: "The Shining",
      publisher: "Doubleday",
      user: {id: 1},
      year: 1977,
      lendStatus: -1,
      score: "-1",
    });

    const book2 = AppDataSource.manager.create(Book, {
      author: "J.K. Rowling",
      name: "Harry Potter and the Philosopher's Stone",
      publisher: "Bloomsbury",
      user: {id: 1},
      year: 1997,
      lendStatus: 0,
      score: "1",
    });

    const book3 = AppDataSource.manager.create(Book, {
      author: "George Orwell",
      name: "Nineteen Eighty-Four",
      publisher: "Secker & Warburg",
      year: 1949,
      user: {id: 2},
      lendStatus: 0,
      score: "2",
    });

    const book4 = AppDataSource.manager.create(Book, {
      author: "Harper Lee",
      name: "To Kill a Mockingbird",
      publisher: "J.B. Lippincott & Co.",
      year: 1960,
      user: {id: 2},
      lendStatus: 0,
      score: "3",
    });

    const book5 = AppDataSource.manager.create(Book, {
      author: "J.R.R. Tolkien",
      name: "The Lord of the Rings",
      publisher: "Allen & Unwin",
      user: null,
      year: 1954,
      lendStatus: -1,
      score: "-1",
    });

    const book6 = AppDataSource.manager.create(Book, {
      author: "Agatha Christie",
      name: "And Then There Were None",
      publisher: "Collins Crime Club",
      user: null,
      year: 1939,
      lendStatus: -1,
      score: "5",
    });

    const book7 = AppDataSource.manager.create(Book, {
      author: "Leo Tolstoy",
      name: "War and Peace",
      publisher: "The Russian Messenger",
      user: null,
      year: 1869,
      lendStatus: -1,
      score: "6",
    });

    const book8 = AppDataSource.manager.create(Book, {
      author: "F. Scott Fitzgerald",
      name: "The Great Gatsby",
      publisher: "Charles Scribner's Sons",
      user: null,
      year: 1925,
      lendStatus: -1,
      score: "7",
    });

    const book9 = AppDataSource.manager.create(Book, {
      author: "Gabriel Garcia Marquez",
      name: "One Hundred Years of Solitude",
      publisher: "Editorial Sudamericana",
      user: null,
      year: 1967,
      lendStatus: -1,
      score: "8",
    });

    const book10 = AppDataSource.manager.create(Book, {
      author: "Mark Twain",
      name: "Adventures of Huckleberry Finn",
      publisher: "Chatto & Windus",
      user: null,
      year: 1884,
      lendStatus: -1,
      score: "9",
    });

    await AppDataSource.manager.save([
      book1,
      book2,
      book3,
      book4,
      book5,
      book6,
      book7,
      book8,
      book9,
      book10,
    ]);

    console.log(
      "Express server has started on port 3000. Open http://localhost:3000/users to see results"
    );
  })
  .catch((error) => console.log(error));
