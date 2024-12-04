import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.books, { nullable: true })
  user: User | null;

  @Column()
  lendStatus: number; //-1 not borrowed, 0 borrowed, 1 returned

  @Column()
  score: string;

  @Column()
  name: string;

  @Column()
  author: string;

  @Column()
  year: number;

  @Column()
  publisher: string;
}
