import { Module } from '@nestjs/common';
import { DoctorService } from './services/doctor.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  
  providers: [DoctorService]
})
export class DoctorModule {}
