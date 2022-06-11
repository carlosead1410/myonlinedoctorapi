import { CustomRepository } from "src/database/typeorm-ex.decorator";
import { In, Like, Repository } from "typeorm";
import { Doctores } from "../entities/doctor.entity";

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


    async findPrueba(nombre: string): Promise<Doctores[]>{

        const query = await this.createQueryBuilder("doctores")
                          .select("doctores.id_doctor")  
                          .leftJoin("doctores.especialidades", "especialidades")
                          .where("especialidades.nombre = :nombre", {nombre: nombre}).getMany()
        
        let doctores: number[] = []
        
        query.forEach( d => doctores.push(d.id_doctor))

        const docfilter = this.createQueryBuilder("doctores")
                              .leftJoinAndSelect("doctores.especialidades", "especialidades")
                              .where("doctores.id_doctor IN  (:...doctors)", {doctors: doctores}).getMany()

        // const subQuery = await this.createQueryBuilder("doctores")
        //                      .subQuery()
        //                      .select("d.id_doctor")
        //                      .from(Doctores, "d")
        //                      .leftJoin("d.especialidades", "especialidades")
        //                      .where("especialidades.nombre = :nombre")
        //                      .groupBy("d.id_doctor")   


        // const docfilter = await this.createQueryBuilder("doctores")
        //                       .from(Doctores, "d")
        //                       .leftJoinAndSelect("d.especialidades", "especialidades")
        //                       .where("d.id_doctor IN (" + subQuery.getQuery() + ")")
        //                       .setParameter("nombre", {nombre: nombre})
        //                       .getMany()
        return docfilter;

    }



}