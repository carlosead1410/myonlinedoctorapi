
import {PrimaryGeneratedColumn, Column, Entity, ManyToMany, JoinTable} from 'typeorm';
import { Doctores } from 'src/doctores/entities/doctor.entity';

@Entity()
export class Especialidades{
    @PrimaryGeneratedColumn()
    id_especialidad: number;

    @Column({type:'varchar', length: 50, nullable: false})
    nombre: string;

    @ManyToMany(() => Doctores, (doctores) => doctores.especialidades)
    @JoinTable({
        name: 'd_e',
        joinColumn: {
            name: 'id_especialidad'
        },
        inverseJoinColumn: {
            name: 'id_doctor'
        },
    })
    doctores: Doctores[];
}