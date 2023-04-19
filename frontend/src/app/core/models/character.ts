import { Category } from "./Category";

export class Character {
    id?: number;
    name: string = "";
    age?: number;
    residence?: string;
    history?: string;
    imgUrl?: string;
    categories: Category[] = [];
  }
  