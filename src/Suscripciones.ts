import { ISuscripciones } from "./ISuscripciones";
import { Isuscriptor } from "./ISuscriptor";
import { Suscriptor } from "./Suscriptor";

export class Suscripciones implements ISuscripciones{
    suscriptores: Isuscriptor[] = [];
    // CREATE SUSCRIPTOR
    crear(suscriptor: Isuscriptor): Isuscriptor {
        this.suscriptores.push(suscriptor);
        console.log("Suscriptor creado", suscriptor);
        return suscriptor;
    }

    // UPDATE SUSCRIPTOR
    actualizar(suscriptor: Isuscriptor): Isuscriptor | undefined {
        let suscriptorModificar = this.suscriptores.find(suscriptor=> suscriptor.identidad === suscriptor.identidad);
        if(suscriptorModificar){
            suscriptorModificar = suscriptor;
    }
    return suscriptorModificar;
}
// READ SUSCRIPTOR
    leer(): Isuscriptor[] {
        return this.suscriptores;
    }

    // DELETE SUSCRIPTOR
    borrar(identidad: string): void {
      this.suscriptores = this.suscriptores.filter(suscriptor => suscriptor.identidad !== identidad);
    }
    buscarPorFecha(fecha: Date): Isuscriptor[] {
        return this.suscriptores.filter(suscriptor => suscriptor.fechaNacimiento === fecha);
    }
    buscarPorIdentidad(identidad: string): Isuscriptor[] {
        return this.suscriptores.filter(suscriptor => suscriptor.identidad === identidad);
    }
    buscarPorMes(mes: number): Isuscriptor[] {
        return this.suscriptores.filter(suscriptor => suscriptor.fechaNacimiento.getMonth() === mes);
    }
    buscarPorAnual(anual: number): Isuscriptor[] {
        return this.suscriptores.filter(suscriptor => suscriptor.fechaNacimiento.getFullYear() === anual);
    }
    buscarPorInteres(interes: string): Isuscriptor[] {
        return this.suscriptores.filter(suscriptor => suscriptor.intereses.includes(interes));
    }
    buscarPorMultiplesIntereses(interes1: string, interes2: string): Isuscriptor[] {
        return this.suscriptores.filter(suscriptor => suscriptor.intereses.includes(interes1)&& suscriptor.intereses.includes(interes2));
    }
    cambiarEstadoSuscripcion(estado: boolean): Isuscriptor | undefined {
        let suscriptorModificar = this.suscriptores.find(suscriptor=> suscriptor.identidad === suscriptor.identidad);
        if(suscriptorModificar){
            suscriptorModificar.suscrito = estado;
    }
    return suscriptorModificar;
    }
    notificarPorInteres(interes: string): void {
        this.buscarPorInteres(interes).forEach(notificar => console.log("La persona con identidad", notificar.identidad, "se ha suscrito a esta notification"));
    }
    notificarTodos(): void {
        this.suscriptores.filter(suscriptores => suscriptores.suscrito ===true).forEach(notificar => console.log("La persona con identidad", notificar.identidad, "se ha suscrito a esta notification"));
    }

}