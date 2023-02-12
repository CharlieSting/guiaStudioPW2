import { IInformacionBasica } from "./IInformacionBasica";
import { Isuscriptor } from "./ISuscriptor";

 export class Suscriptor implements Isuscriptor{
    identidad: string;
    informacionBasica: IInformacionBasica;
    municipio: string;
    departamento: string;
    pais: string;
    dia: number;
    mes: number;
    anual: number;
    padre: IInformacionBasica;
    madre: IInformacionBasica;
    notas?: string | undefined;
    sexo: "M" | "F";
    fechaNacimiento: Date;
    fechaRegistro: Date;
    suscrito: boolean;
    intereses: string[] = [];
    
    constructor(identidad: string, sexo:"M"|"F", informacionBasica: IInformacionBasica, dia: number, mes: number, anual: number, fechaNacimiento: Date) {
        this.identidad = identidad;
        this.informacionBasica = informacionBasica;
        this.dia = dia;
        this.mes = mes;
        this.anual = anual;
        this.fechaNacimiento = fechaNacimiento;
        this.fechaRegistro = new Date();
        this.municipio="";
        this.departamento="";
        this.pais="";
        this.padre={
            nombre:"",
            primerApellido:"",
            segundoApellido:"",
            nacionalidad:""
        }
        this.madre={
            nombre:"",
            primerApellido:"",
            segundoApellido:"",
            nacionalidad:""
        }
        this.sexo=sexo;
        this.suscrito=false;
        this.intereses=[];
    }
}