import { CustomRepository } from "../../database/typeorm-ex.decorator";
import {  Repository } from "typeorm";
import { Doctores } from "../entities/doctor.entity";


@CustomRepository(Doctores)
export class DoctorRepository extends Repository<Doctores>{

    async findAll(): Promise<Doctores[]>{
        try{
            let list_doctores = await this.find({
                relations: ["especialidades"],
            });
            return list_doctores;
        }
        catch(err){
            console.log(err);
        }
        
    }



    async findByEspeciality(especialidad: string): Promise<Doctores[]>{
        try{
            const doctoresFiltrados =  await this.createQueryBuilder('doctores')
            .leftJoin('doctores.especialidades', 'especialidades')
            .leftJoinAndSelect('doctores.especialidades', 'EspecialidadesSelect')
            .where('especialidades.nombre like :especialidad', { especialidad: `%${especialidad}%`})
            .orderBy('doctores.id_doctor', 'ASC')
            .getMany();

            return doctoresFiltrados;
        }
        
        catch(err){
            console.log(err);
        }

    }



}