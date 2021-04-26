import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { DVD } from "./DVD";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToMany(() => DVD, dvd => dvd.categories)
    dvds: DVD[];
}
