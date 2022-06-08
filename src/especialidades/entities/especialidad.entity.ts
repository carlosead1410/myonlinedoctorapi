import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

@Entity()
export class Especialidad{
    @PrimaryGeneratedColumn()
    id_especialidad: number;

    @Column({type:'varchar', length: 50, nullable: false})
    nombre: string;
}