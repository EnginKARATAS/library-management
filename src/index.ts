import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { User } from "./entity/User"
import { Book } from "./entity/Book"

AppDataSource.initialize().then(async () => {

    const app = express()
    app.use(bodyParser.json())

    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next)
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

            } else if (result !== null && result !== undefined) {
                res.json(result)
            }
        })
    })

    app.listen(3000)
 
    const newTestUser1 = await AppDataSource.manager.save(
        AppDataSource.manager.create(User, {
            name: "Test User"
        })
    );

    const book = AppDataSource.manager.create(Book, {
        author: "Test Author",
        name: "Test Book",
        publisher: "Test Publisher",
        user: newTestUser1,
        year: 2023,
        lendStatus: -1,
        score: -1
    });

    try {
        const savedBook = await AppDataSource.manager.save(book);
        console.log("Book saved successfully:", savedBook);
    } catch (error) {
        console.error("Error saving book:", error);
    }
    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))
