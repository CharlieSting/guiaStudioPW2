"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suscriptor = void 0;
class Suscriptor {
    identidad;
    informacionBasica;
    municipio;
    departamento;
    pais;
    dia;
    mes;
    anual;
    padre;
    madre;
    notas;
    sexo;
    fechaNacimiento;
    fechaRegistro;
    suscrito;
    intereses = [];
    constructor(identidad, sexo, informacionBasica, dia, mes, anual, fechaNacimiento) {
        this.identidad = identidad;
        this.informacionBasica = informacionBasica;
        this.dia = dia;
        this.mes = mes;
        this.anual = anual;
        this.fechaNacimiento = fechaNacimiento;
        this.fechaRegistro = new Date();
        this.municipio = "";
        this.departamento = "";
        this.pais = "";
        this.padre = {
            nombre: "",
            primerApellido: "",
            segundoApellido: "",
            nacionalidad: ""
        };
        this.madre = {
            nombre: "",
            primerApellido: "",
            segundoApellido: "",
            nacionalidad: ""
        };
        this.sexo = sexo;
        this.suscrito = false;
        this.intereses = [];
    }
}
exports.Suscriptor = Suscriptor;
