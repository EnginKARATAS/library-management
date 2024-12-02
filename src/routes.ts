import { UserController } from "./controller/UserController";
import { BookController } from "./controller/BookController";

export const Routes = [
  {
    method: "get",
    route: "/users",
    controller: UserController,
    action: "getAllUsers",
  },
  {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "getUser",
  },
  {
    method: "get",
    route: "/books",
    controller: BookController,
    action: "getAllBooks",
  },
  {
    method: "get",
    route: "/books/:id",
    controller: BookController,
    action: "getBook",
  },
  {
    method: "post",
    route: "/users/:id/borrow/:bookId",
    controller: UserController,
    action: "borrowBook",
  },
  {
    method: "post",
    route: "/users/:id/return/:bookId",
    controller: UserController,
    action: "returnBook",
  },
];
