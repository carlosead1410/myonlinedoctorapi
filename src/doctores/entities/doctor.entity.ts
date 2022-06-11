import {PrimaryGeneratedColumn, Column, Entity, ManyToMany} from 'typeorm';

import { Especialidades } from 'src/especialidades/entities/especialidad.entity';
@Entity()
export class Doctores{
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

    @ManyToMany(() => Especialidades, (especialidad) => especialidad.doctores)
    especialidades: Especialidades[];
}