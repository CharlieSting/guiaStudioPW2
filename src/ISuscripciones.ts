import { Isuscriptor } from "./ISuscriptor";

export interface ISuscripciones{
    suscriptores: Isuscriptor[]
    crear(suscriptor: Isuscriptor): Isuscriptor
    actualizar(suscriptor: Isuscriptor): Isuscriptor | undefined
    leer(): Isuscriptor[]
    borrar(identidad: string): void
    buscarPorFecha(fecha: Date): Isuscriptor[]
    buscarPorIdentidad(identidad: string): Isuscriptor[]
    buscarPorMes(mes: number): Isuscriptor[]
    buscarPorAnual(anual: number): Isuscriptor[]
    buscarPorInteres(interes: string): Isuscriptor[]
    buscarPorMultiplesIntereses(interes1: string, interes2:string): Isuscriptor[]
    cambiarEstadoSuscripcion(estado: boolean): Isuscriptor | undefined
    notificarPorInteres(interes: string): void
    notificarTodos(): void
}