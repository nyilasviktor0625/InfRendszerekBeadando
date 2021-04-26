import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './Category';
import { Customer } from './Customer';

@Entity()
export class DVD {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, type: 'text' })
    title: string;

    @Column({ nullable: true, type: 'text' })
    description: string;

    @Column({ type: 'text' })
    date: string;

    @Column({ nullable: true })
    imgUrl: string;

    @ManyToOne(type => Customer, {
        eager: true,
        cascade: true
    })
    user: Customer;

    @ManyToMany(() => Category, category => category.dvds, {
        eager: true,
        cascade: true
    })
    @JoinTable()
    categories: Category[];
}