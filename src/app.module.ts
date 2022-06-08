import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Client } from 'pg';
import { DoctorController } from './doctores/controllers/doctor.controller';
import { DoctorModule } from './doctores/doctor.module';
import { EspecialidadModule } from './especialidades/especialidad.module';


// const client = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'ShortPaper2',
//   password: '1234',
//   port: 5432
// });

// client.connect();
// client.query('SELECT * FROM doctores', (err, res)=>{
//   console.log(err);
//   console.log(res.rows)
// });


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      retryDelay: 3000,
      retryAttempts: 10
    }),
    DoctorModule,
    EspecialidadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}