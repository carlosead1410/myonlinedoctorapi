import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Especialidad } from '../entities/especialidad.entity';

@Injectable()
export class EspecialidadService {
    constructor(@InjectRepository(Especialidad) private espRepo: Repository<Especialidad>){}
    
    findAll(){
        this.espRepo.find();
    }

    // findOne(id_especialidad:number){
    //     return this.espRepo.findOne()
    // }

     
}
