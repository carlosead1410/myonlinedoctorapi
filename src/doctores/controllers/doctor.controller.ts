import { Controller, Get, Query } from '@nestjs/common';
import { DoctorService } from '../services/doctor.service';

@Controller('api/doctor')
export class DoctorController {
    constructor(private doctorServices: DoctorService){}

    @Get()
    ObtenerDoctor(){
        return this.doctorServices.findAll();
    }

    @Get('/masculinos/')
    getMasculinos(@Query('name') name:string){
        return this.doctorServices.changeSex(name);
    }
}
