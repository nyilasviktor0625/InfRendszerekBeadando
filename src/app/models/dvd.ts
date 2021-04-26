import { Category } from "./category";
import { Customer } from "./customer";

export interface DVD {
 id: number;
    title: string;
    description: string;
    date: string;
    imgUrl: string;
    user: Customer;
    categories: Category[];
}
