// Persona 
interface IPersona {
    identidad: string;
    nombre: string;
    apellido: string;
    edad: number;
    sexo: string;
    estadoCivil: string;
    fechaNacimiento: Date;
    nacionalidad: string;
    pasatiempos: string[];
    suscrito: boolean;
    direccion: {
        calle: string;
        numero: number;
        ciudad: string;
        pais: string;
    };
}

// clase Persona
class Persona implements IPersona {
    identidad: string;
    nombre: string;
    apellido: string;
    edad: number;
    sexo: string;
    estadoCivil: string;
    fechaNacimiento: Date;
    nacionalidad: string;
    pasatiempos: string[];
    suscrito: boolean;
    direccion: {
        calle: string;
        numero: number;
        ciudad: string;
        pais: string;
    };

    constructor(identidad: string,nombre: string, apellido: string, edad: number, sexo: string, estadoCivil: string, fechaNacimiento: Date, nacionalidad: string, pasatiempos: string[], suscrito: boolean, direccion: { calle: string; numero: number; ciudad: string; pais: string; }) {
       this.identidad = identidad;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
        this.fechaNacimiento = fechaNacimiento;
        this.nacionalidad = nacionalidad;
        this.pasatiempos = pasatiempos;
        this.suscrito = suscrito;
        this.direccion = direccion;
    }
    
}

// persona1
const persona1 = new Persona('012091892482923','Vladimir','Putin', 69, 'Masculino', 
'Soltero', new Date(1999, 1, 8), 'Ruso', ['Leer', 'Espia'], true,
{calle: 'Calle 1', numero: 1876543, ciudad: 'Moscu', pais: 'Federacion de rusia'});

// persona 2

const persona2 = new Persona('007','James','Bond', 54, 'Masculino',
'Soltero', new Date(1960, 4, 1), 'Ingles', ['Justicia', 'Matar'], false,
{calle: 'Calle desconicida', numero: 234345, ciudad: 'Londres', pais: 'Reino Unido'});

// persona 3

const persona3 = new Persona('123456789','Juan','Perez', 25, 'Masculino',
'Soltero', new Date(1999, 1, 8), 'Mexicano', ['Leer', 'Espia'], true,
{calle: 'Calle 1', numero: 1876543, ciudad: 'Moscu', pais: 'Federacion de rusia'});

// persona 4




var formularios = [];
formularios.push(persona1);
formularios.push(persona2);
formularios.push(persona3)


// find persona por identidad
var personaEncontrada=formularios.find((formulario)=>formulario.identidad == "007")
console.log(personaEncontrada);


// delete persona por identidad
var personaEliminada=formularios.filter((formulario)=>formulario.identidad != "007")
console.log(personaEliminada);
