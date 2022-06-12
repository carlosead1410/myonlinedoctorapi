import { Controller, Get, Query } from '@nestjs/common';
import { EspecialidadService } from '../services/especialidad.service';

@Controller('api/especialidad')
export class EspecialidadController {

    constructor(private especialidadServices: EspecialidadService){}

    @Get()
    ObtenerEspecialidades(){
        let a =  this.especialidadServices.findAll();
        return a
    }

    @Get('')
    buscarEspecialidad(@Query('nombre') nombre){
        return this.especialidadServices.findOne(nombre)
    }

}
