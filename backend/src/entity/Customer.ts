import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { DVD } from './DVD';

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;
	
	@Column()
    ID_num: number;
	
	@Column()
    zip_number: number;
	
	@Column()
    city: string;
	
	@Column()
    street: string;

	@Column()
    house_num: number;

    @OneToMany(type => DVD, dvd => dvd.user)
    dvds: DVD[];

}
