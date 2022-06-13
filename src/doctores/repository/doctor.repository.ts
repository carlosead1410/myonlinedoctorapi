import { CustomRepository } from "../../database/typeorm-ex.decorator";
import {  Repository } from "typeorm";
import { Doctores } from "../entities/doctor.entity";


@CustomRepository(Doctores)
export class DoctorRepository extends Repository<Doctores>{

    async findAll(): Promise<Doctores[]>{
        try {
            
        } catch (error) {
            
        }
        let list_doctores = await this.find({
            relations: ["especialidades"],
        });
        return list_doctores;
    }



    async findByEspeciality(especialidad: string): Promise<Doctores[]>{

        const doctoresFiltrados =  await this.createQueryBuilder('doctores')
                            .leftJoin('doctores.especialidades', 'especialidades')
                            .leftJoinAndSelect('doctores.especialidades', 'EspecialidadesSelect')
                            .where('especialidades.nombre like :especialidad', { especialidad: `%${especialidad}%`})
                            .orderBy('doctores.id_doctor', 'ASC')
                            .getMany();

        return doctoresFiltrados;

    }



}