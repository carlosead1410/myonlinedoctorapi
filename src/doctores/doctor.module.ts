import { Module } from '@nestjs/common';
import { DoctorService } from './services/doctor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctores } from './entities/doctor.entity';
import { DoctorController } from './controllers/doctor.controller';
import { TypeOrmExModule } from '../database/typeorm-ex.module';
import { DoctorRepository } from './repository/doctor.repository';
import { Especialidades } from 'src/especialidades/entities/especialidad.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Doctores, Especialidades]),
    TypeOrmExModule.forCustomRepository([DoctorRepository]),
  ],
  controllers: [DoctorController],
  providers: [DoctorService]
})
export class DoctorModule {}
