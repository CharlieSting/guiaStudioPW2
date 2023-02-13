"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suscripciones = void 0;
class Suscripciones {
    suscriptores = [];
    // CREATE SUSCRIPTOR
    crear(suscriptor) {
        this.suscriptores.push(suscriptor);
        console.log("Suscriptor creado", suscriptor);
        return suscriptor;
    }
    // UPDATE SUSCRIPTOR
    actualizar(suscriptor) {
        let suscriptorModificar = this.suscriptores.find(suscriptor => suscriptor.identidad === suscriptor.identidad);
        if (suscriptorModificar) {
            suscriptorModificar = suscriptor;
        }
        return suscriptorModificar;
    }
    // READ SUSCRIPTOR
    leer() {
        return this.suscriptores;
    }
    // DELETE SUSCRIPTOR
    borrar(identidad) {
        this.suscriptores = this.suscriptores.filter(suscriptor => suscriptor.identidad !== identidad);
    }
    buscarPorFecha(fecha) {
        return this.suscriptores.filter(suscriptor => suscriptor.fechaNacimiento === fecha);
    }
    buscarPorIdentidad(identidad) {
        return this.suscriptores.filter(suscriptor => suscriptor.identidad === identidad);
    }
    buscarPorMes(mes) {
        return this.suscriptores.filter(suscriptor => suscriptor.fechaNacimiento.getMonth() === mes);
    }
    buscarPorAnual(anual) {
        return this.suscriptores.filter(suscriptor => suscriptor.fechaNacimiento.getFullYear() === anual);
    }
    buscarPorInteres(interes) {
        return this.suscriptores.filter(suscriptor => suscriptor.intereses.includes(interes));
    }
    buscarPorMultiplesIntereses(interes1, interes2) {
        return this.suscriptores.filter(suscriptor => suscriptor.intereses.includes(interes1) && suscriptor.intereses.includes(interes2));
    }
    cambiarEstadoSuscripcion(identidad, estado) {
        let suscriptorModificar = this.suscriptores.find(suscriptor => suscriptor.identidad === identidad);
        if (suscriptorModificar) {
            suscriptorModificar.suscrito = estado;
        }
        return suscriptorModificar;
    }
    notificarPorInteres(interes) {
        this.buscarPorInteres(interes).forEach(notificar => console.log("La persona con identidad", notificar.identidad, "se ha suscrito a esta notification"));
    }
    notificarTodos() {
        this.suscriptores.filter(suscriptores => suscriptores.suscrito === true).forEach(notificar => console.log("La persona con identidad", notificar.identidad, "se ha suscrito a esta notification"));
    }
}
exports.Suscripciones = Suscripciones;
