import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctores } from '../entities/doctor.entity'; 

@Injectable()
export class DoctorService {
    constructor(@InjectRepository(Doctores) private espRepo: Repository<Doctores>){}
    
    findAll(){
        return this.espRepo.find();
    }
}
