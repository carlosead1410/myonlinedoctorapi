import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Especialidades } from '../entities/especialidad.entity';

@Injectable()
export class EspecialidadService {
    constructor(@InjectRepository(Especialidades) private espRepo: Repository<Especialidades>){}
    
    findAll(){
        this.espRepo.find();
    }

    // findOne(id_especialidad:number){
    //     return this.espRepo.findOne()
    // }

     
}
