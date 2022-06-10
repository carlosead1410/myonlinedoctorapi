import { IsArray, IsOptional } from "class-validator";

export class ShowDoctor{
    readonly id_doctor: number;
    readonly nombre_doctor: string;
    readonly sexo: string;
    readonly foto: string;

    @IsOptional()
    @IsArray()
    readonly especialidades: string[];
}