import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctores } from '../entities/doctor.entity'; 

@Injectable()
export class DoctorService {
    constructor(@InjectRepository(Doctores) private docRepo: Repository<Doctores>){}
    
    findAll(){
        return this.docRepo.find();
    }
    changeSex(name: string){
        console.log(name);
        let a =this.docRepo.findBy({p_nombre: name});
        return a;
    }
}
