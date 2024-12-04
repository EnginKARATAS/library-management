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
    const cors = require('cors');
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
        name: "Test User",
      })
    );
    await AppDataSource.manager.save(
      AppDataSource.manager.create(User, {
        name: "Test User2",
      })
    );
    await AppDataSource.manager.save(
      AppDataSource.manager.create(User, {
        name: "Test User3",
      })
    );
    
    const book1 = AppDataSource.manager.create(Book, {
      author: "Test Author",
      name: "Test Book",
      publisher: "Test Publisher",
      user: null,
      year: 2023,
      lendStatus: -1,
      score: "-1",
    });

    const book2 = AppDataSource.manager.create(Book, {
      author: "Test Author2",
      name: "Test Book2",
      publisher: "Test Publisher2",
      user: null,
      year: 2023,
      lendStatus: -1,
      score: "1",
    });

    const book3 = AppDataSource.manager.create(Book, {
      author: "Test Author3",
      name: "Test Book3",
      publisher: "Test Publisher3",
      user: null,
      year: 2023,
      lendStatus: -1,
      score: "2",
    });

    const book4 = AppDataSource.manager.create(Book, {
      author: "Test Author4",
      name: "Test Book4",
      publisher: "Test Publisher4",
      user: null,
      year: 2023,
      lendStatus: -1,
      score: "3",
    });

    const book5 = AppDataSource.manager.create(Book, {
      author: "Test Author5",
      name: "Test Book5",
      publisher: "Test Publisher5",
      user: null,
      year: 2023,
      lendStatus: -1,
      score: "4",
    });

    const book6 = AppDataSource.manager.create(Book, {
      author: "Test Author6",
      name: "Test Book6",
      publisher: "Test Publisher6",
      user: null,
      year: 2023,
      lendStatus: -1,
      score: "5",
    });

    await AppDataSource.manager.save([
      book1,
      book2,
      book3,
      book4,
      book5,
      book6,
    ]);

    console.log(
      "Express server has started on port 3000. Open http://localhost:3000/users to see results"
    );
  })
  .catch((error) => console.log(error));
