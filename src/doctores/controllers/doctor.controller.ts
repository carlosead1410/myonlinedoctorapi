import { Controller, Get, HttpCode, Param, Query } from '@nestjs/common';
import { Doctores } from '../entities/doctor.entity';
import { DoctorService } from '../services/doctor.service';

@Controller('api/doctor')
export class DoctorController {
    
    constructor(private readonly doctorServices: DoctorService){}

    @Get('all')
    buscarDoctores(){

        return this.doctorServices.getAllDoctor();
    }

    @Get('filter/especiality')
    @HttpCode(200)
    buscarEspecialidad(@Query('especialidad') especialidad:string){
        return this.doctorServices.getEspecialidad(especialidad)
    }

   
}

