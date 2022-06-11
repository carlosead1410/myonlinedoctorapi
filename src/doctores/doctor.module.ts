import { Module } from '@nestjs/common';
import { DoctorService } from './services/doctor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctores } from './entities/doctor.entity';
import { DoctorController } from './controllers/doctor.controller';
import { Especialidades } from '../especialidades/entities/especialidad.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Doctores, Especialidades]),
  ],
  controllers: [DoctorController],
  providers: [DoctorService]
})
export class DoctorModule {}
