import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Console } from 'console';
import { Especialidades } from '../../especialidades/entities/especialidad.entity';
import { Repository } from 'typeorm';
import { Doctores } from '../entities/doctor.entity'; 

@Injectable()
export class DoctorService {
    constructor(
        @InjectRepository(Doctores) private docRepo: Repository<Doctores>,
        @InjectRepository(Especialidades) private espRepo: Repository<Especialidades>
    ){}
    
    findAll(){
        return this.docRepo.find();
    }

    async findByEspeciality(especialidadName: string){
        // console.log(especialidadName);
        // const especialidades = await this.espRepo.findBy({nombre: especialidadName});
        // console.log(especialidades);
        const doctors = await this.docRepo.find({
            relations:['especialidades'],
            where:{
                especialidades:{
                    nombre: especialidadName
                }
            }
        });
        
        

        return doctors;


    }


    
}
