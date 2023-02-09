"use strict";
// clase Persona
class Persona {
    identidad;
    nombre;
    apellido;
    edad;
    sexo;
    estadoCivil;
    fechaNacimiento;
    nacionalidad;
    pasatiempos;
    direccion;
    constructor(identidad, nombre, apellido, edad, sexo, estadoCivil, fechaNacimiento, nacionalidad, pasatiempos, direccion) {
        this.identidad = identidad;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
        this.fechaNacimiento = fechaNacimiento;
        this.nacionalidad = nacionalidad;
        this.pasatiempos = pasatiempos;
        this.direccion = direccion;
    }
}
// crear persona
const persona1 = new Persona('012091892482923', 'Vladimir', 'Putin', 69, 'Masculino', 'Soltero', new Date(1999, 1, 8), 'Ruso', ['Leer', 'Espia'], { calle: 'Calle 1', numero: 1, ciudad: 'Moscu', pais: 'Federacion de rusia' });
// persona 2
const persona2 = new Persona('007', 'James', 'Bond', 54, 'Masculino', 'Soltero', new Date(1960, 4, 1), 'Ingles', ['Justicia', 'Matar'], { calle: 'Calle desconicida', numero: 2, ciudad: 'Londres', pais: 'Reino Unido' });
var formularios = [];
formularios.push(persona1);
formularios.push(persona2);
// mostrar en consola
console.log(formularios);
