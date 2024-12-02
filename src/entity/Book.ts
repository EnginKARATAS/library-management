import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.books)
  user: User;

  @Column()
  lendStatus: number= -1; //-1 not borrowed, 0 borrowed, 1 returned

  @Column()
  score: number = -1;

  @Column()
  name: string;

  @Column()
  author: string;

  @Column()
  year: number;

  @Column()
  publisher: string;
}
