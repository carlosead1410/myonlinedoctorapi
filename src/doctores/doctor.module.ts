import { Module } from '@nestjs/common';
import { DoctorService } from './services/doctor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctores } from './entities/doctor.entity';
import { DoctorController } from './controllers/doctor.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Doctores]),
  ],
  controllers: [DoctorController],
  providers: [DoctorService]
})
export class DoctorModule {}
