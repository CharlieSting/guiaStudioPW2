"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Suscripciones_1 = require("./Suscripciones");
const Suscriptor_1 = require("./Suscriptor");
const informacionBasica1 = {
    nombre: "Juan",
    primerApellido: "Perez",
    segundoApellido: "Gomez",
    nacionalidad: "Hondureño"
};
const informacionBasica2 = {
    nombre: "Maria",
    primerApellido: "Perez",
    segundoApellido: "Gomez",
    nacionalidad: "Hondureña"
};
const informacionBasica3 = {
    nombre: "Pedro",
    primerApellido: "Coronel",
    segundoApellido: "Baños",
    nacionalidad: "Español"
};
const informacionBasica4 = {
    nombre: "Tatiana",
    primerApellido: "Calderon",
    segundoApellido: "Baños",
    nacionalidad: "Española"
};
const informacionBasica5 = {
    nombre: "Jose",
    primerApellido: "Perez",
    segundoApellido: "Gomez",
    nacionalidad: "Hondureño"
};
const informacionBasica6 = {
    nombre: "Francesca",
    primerApellido: "Monrow",
    segundoApellido: "Gomez",
    nacionalidad: "Hondureña"
};
const informacionBasica7 = {
    nombre: "Luis",
    primerApellido: "Rivera",
    segundoApellido: "Turcios",
    nacionalidad: "Salvadoreño"
};
const persona1 = new Suscriptor_1.Suscriptor("0801-2001-00001", "M", informacionBasica1, 19, 12, 1999, new Date(1999, 11, 19));
const persona2 = new Suscriptor_1.Suscriptor("0801-2003-00002", "F", informacionBasica2, 21, 8, 1976, new Date(1976, 7, 21));
const persona3 = new Suscriptor_1.Suscriptor("0801-2003-00003", "M", informacionBasica3, 15, 12, 1984, new Date(1984, 11, 15));
const persona4 = new Suscriptor_1.Suscriptor("0801-2004-00004", "F", informacionBasica4, 5, 1, 2001, new Date(2001, 0, 5));
const persona5 = new Suscriptor_1.Suscriptor("0801-2003-00005", "M", informacionBasica5, 5, 8, 1965, new Date(1965, 7, 5));
const persona6 = new Suscriptor_1.Suscriptor("0801-2006-00006", "F", informacionBasica6, 18, 10, 1988, new Date(1988, 9, 18));
const persona7 = new Suscriptor_1.Suscriptor("0801-2007-00007", "M", informacionBasica7, 18, 9, 1988, new Date(1988, 8, 18));
const suscripciones = new Suscripciones_1.Suscripciones();
suscripciones.crear(persona1);
suscripciones.crear(persona2);
suscripciones.crear(persona3);
suscripciones.crear(persona4);
suscripciones.crear(persona5);
suscripciones.crear(persona6);
suscripciones.crear(persona7);
suscripciones.borrar("0801-2003-00002");
suscripciones.cambiarEstadoSuscripcion("0801-2003-00003", true);
console.log(suscripciones.suscriptores);
