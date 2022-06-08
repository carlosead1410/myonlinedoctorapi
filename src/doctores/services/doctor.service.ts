import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/commons/service.commonts';
import { Repository } from 'typeorm';
import { Doctores } from '../entities/doctor.entity'; 

@Injectable()
export class DoctorService extends BaseService<Doctores>  {
    
    
    constructor(@InjectRepository(Doctores) private docRepo: Repository<Doctores>){
        super();
    }
    
    getRepository(): Repository<Doctores> {
        throw new Error('Method not implemented.');
    }
    

    
}
