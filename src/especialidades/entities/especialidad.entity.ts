import {
    PrimaryGeneratedColumn, 
    Column, 
    Entity,
    ManyToMany
} from 'typeorm';

import { Doctores } from 'src/doctores/entities/doctor.entity';

@Entity()
export class Especialidades{
    @PrimaryGeneratedColumn()
    id_especialidad: number;

    @Column({type:'varchar', length: 50, nullable: false})
    nombre: string;

    @ManyToMany(() => Doctores, (doctor) => doctor.especialidades )
    doctores: Doctores[];
}