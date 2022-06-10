import { Controller, Get, Param, Query } from '@nestjs/common';
import { DoctorService } from '../services/doctor.service';

@Controller('api/doctor')
export class DoctorController {
    constructor(private doctorServices: DoctorService){}

    @Get()
    ObtenerDoctor(){
        return this.doctorServices.findAll();
    }

    @Get('prueba/:especialidadName')
    Prueba(@Param('especialidadName') especialidadName: string ){
        return this.doctorServices.findByEspeciality(especialidadName);
    }
}

