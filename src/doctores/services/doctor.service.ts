import { Injectable } from '@nestjs/common';
import { DoctorRepository } from '../repository/doctor.repository';

@Injectable()
export class DoctorService {
    
    constructor(private readonly docRepo: DoctorRepository){}

    getAllDoctor(){
        return this.docRepo.findAll();
    }

    getEspecialidad(especialidad: string){
        //Si envio una especialidad, buscamos por esa especialidad
        if(especialidad){
            especialidad = especialidad.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
            return this.docRepo.findByEspeciality(especialidad);
        }else{
            //caso en el que no indico especialidad
            return this.getAllDoctor();
        }
    }

}
