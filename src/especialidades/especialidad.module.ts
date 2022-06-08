import { Module } from '@nestjs/common';
import { EspecialidadController } from './controllers/especialidad.controller';
import { EspecialidadService } from './services/especialidad.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Especialidades } from './entities/especialidad.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Especialidades]),
  ],
  controllers: [EspecialidadController],
  providers: [EspecialidadService]
})
export class EspecialidadModule {}
