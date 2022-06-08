import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

@Entity()
export class Doctor{
    @PrimaryGeneratedColumn()
    id_doctor: number;

    @Column({type:'varchar', length: 25, nullable: false})
    p_nombre: string;

    @Column({type:'varchar', length: 25, nullable: false})
    p_apellido: string;

    @Column({type:'varchar', length: 1, nullable: false})
    sexo: string;

    @Column({type:'varchar', length: 500})
    foto: string;
}