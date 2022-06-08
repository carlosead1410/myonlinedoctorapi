import { Controller, Get } from '@nestjs/common';
import { DoctorService } from '../services/doctor.service';

@Controller('api/doctor')
export class DoctorController {
    constructor(private doctorServices: DoctorService){}

    @Get()
    ObtenerDoctor(){
        return this.doctorServices.findAll();
    }
}
