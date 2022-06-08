import { Controller, Get, Query } from '@nestjs/common';
import { BaseController } from 'src/commons/controller.commons';
import { BaseService } from 'src/commons/service.commonts';
import { Doctores } from '../entities/doctor.entity';
import { DoctorService } from '../services/doctor.service';

@Controller('api/doctor')
export class DoctorController extends BaseController<Doctores>{
    
    constructor(private doctorServices: DoctorService){
        super();
    }

    getService(): BaseService<Doctores> {
        return this.doctorServices;
    }

   
}
