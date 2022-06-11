import { Controller, Get, Param, Query } from '@nestjs/common';
<<<<<<< HEAD
=======
import { BaseController } from 'src/commons/controller.commons';
import { BaseService } from 'src/commons/service.commonts';
import { Doctores } from '../entities/doctor.entity';
>>>>>>> 3d57650529cc79995ca5bfea3902674fad7cb953
import { DoctorService } from '../services/doctor.service';

@Controller('api/doctor')
export class DoctorController {
    
    constructor(private readonly doctorServices: DoctorService){}

    @Get('all')
    buscarDoctores(){
        return this.doctorServices.getAllDoctor();
    }

<<<<<<< HEAD
    @Get('prueba/:especialidadName')
    Prueba(@Param('especialidadName') especialidadName: string ){
        return this.doctorServices.findByEspeciality(especialidadName);
=======
    @Get('especialidad/:nombre')
    buscarEspecialidad(@Param('nombre') nombre){
        return this.doctorServices.getEspecialidad(nombre)
>>>>>>> 3d57650529cc79995ca5bfea3902674fad7cb953
    }

   
}

