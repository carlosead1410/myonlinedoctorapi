import { CustomRepository } from "../../database/typeorm-ex.decorator";
import { In, Like, Repository } from "typeorm";
import { Doctores } from "../entities/doctor.entity";
import { NotFoundException } from "@nestjs/common";

@CustomRepository(Doctores)
export class DoctorRepository extends Repository<Doctores>{

    async findAll(): Promise<Doctores[]>{
        let list_doctores = this.find({
            relations: ["especialidades"],
        });
        return list_doctores;
    }

    async findEspecialidad(nombre: string): Promise<Doctores[]>{
        const query = this.createQueryBuilder("doctores")
                          .leftJoinAndSelect("doctores.especialidades", "especialidades")
                          .having("string_agg(especialidades.nombre, ', ') Like %:nombre", {nombre: nombre})
                          .orHaving("string_agg(especialidades.nombre, ', ') Like %:nombre", {nombre: nombre})
                          .orHaving("string_agg(especialidades.nombre, ', ') Like %:nombre", {nombre: nombre})
                          .groupBy("doctores.id_doctor")
        const doctores = await query.getMany();

          
        return doctores;
    }


    async findByEspeciality(especialidad: string): Promise<Doctores[]>{

        const query = await this.createQueryBuilder("doctores")
                          .select("doctores.id_doctor")  
                          .leftJoin("doctores.especialidades", "especialidades")
                          .where("especialidades.nombre = :especialidad", {especialidad: especialidad}).getMany()
        

        if (query.length == 0){
            throw new NotFoundException(`No hay Doctores con la espacielidad de: ${especialidad}`)
        }
        let doctores: number[] = []
        
        query.forEach( d => doctores.push(d.id_doctor))

        const docfilter = this.createQueryBuilder("doctores")
                              .leftJoinAndSelect("doctores.especialidades", "especialidades")
                              .where("doctores.id_doctor IN  (:...doctors)", {doctors: doctores}).getMany()

        return docfilter;

    }



}