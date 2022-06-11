import { Controller, Get, Param, Query } from '@nestjs/common';
import { BaseController } from 'src/commons/controller.commons';
import { BaseService } from 'src/commons/service.commonts';
import { Doctores } from '../entities/doctor.entity';
import { DoctorService } from '../services/doctor.service';

@Controller('api/doctor')
export class DoctorController {
    
    constructor(private readonly doctorServices: DoctorService){}

    @Get('all')
    buscarDoctores(){
        return this.doctorServices.getAllDoctor();
    }

    @Get('especialidad/:nombre')
    buscarEspecialidad(@Param('nombre') nombre){
        return this.doctorServices.getEspecialidad(nombre)
    }

   
}
