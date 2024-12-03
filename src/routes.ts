import { UserController } from "./controller/UserController";
import { BookController } from "./controller/BookController";

export const Routes = [
  //get operations
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
  //post operations
  {
    method: "post",
    route: "/users/:id/borrow/:bookId",
    controller: BookController,
    action: "borrowBook",
  },
  {
    method: "post",
    route: "/users/:id/return/:bookId",
    controller: BookController,
    action: "returnBook",
  },
];
