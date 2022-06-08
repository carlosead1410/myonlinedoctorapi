import { EntityRepository, Repository } from "typeorm";
import { Doctores } from "../entities/doctor.entity";

@EntityRepository(Doctores)
export class RepositoryDoctor extends Repository<Doctores>{

    async findAll():Promise<Doctores[]> {
        return this.find();
    }


}