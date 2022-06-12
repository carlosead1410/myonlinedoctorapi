import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Especialidades } from '../entities/especialidad.entity';

@Injectable()
export class EspecialidadService {
    constructor(@InjectRepository(Especialidades) private espRepo: Repository<Especialidades>){}
    
    findAll(){
        return this.espRepo.find();
    }

    findOne(name: string) {
        return this.espRepo.findOneBy({
           nombre: name,
        })
    }
}
