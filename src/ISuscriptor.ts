import { IInformacionBasica } from "./IInformacionBasica";

export interface Isuscriptor {
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
    notas?: string;
    sexo: "M" | "F";
    fechaNacimiento: Date;
    fechaRegistro: Date;
    suscrito: boolean;
    intereses: string[];
}