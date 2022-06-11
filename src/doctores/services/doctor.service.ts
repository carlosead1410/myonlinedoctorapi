import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/commons/service.commonts';
import { Repository } from 'typeorm';
import { Doctores } from '../entities/doctor.entity'; 
import { DoctorRepository } from '../repository/doctor.repository';

@Injectable()
export class DoctorService {
    
    constructor(private readonly docRepo: DoctorRepository){}

    getAllDoctor(){
        return this.docRepo.findAll();
    }

    getEspecialidad(nombre: string){
        return this.docRepo.findPrueba(nombre);
    }
    
    

    
}
