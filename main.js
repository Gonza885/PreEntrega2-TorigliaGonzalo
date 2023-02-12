/** Pre-Entrega 2 - Toriglia Gonzalo */
//Alumnos que se inscriben y/o dan de baja al gimnasio (Crazy4Muslce)

class Alumnos {
    constructor(nombre, apellido, dni , cuota){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.cuota = cuota;
    }
}

const gonzalo = new Alumnos ("Gonzalo","Toriglia", 41230213, 1800);
const juanpablo = new Alumnos ("Juan Pablo","Gallegos", 42000000, 2000);
const julieta = new Alumnos ("Julieta","Zuñiga", 44000000, 2000);
const rodrigo  = new Alumnos ("Rodrigo","Alvarez", 13000000 , 1000);

const arrayAlumnos = [gonzalo, juanpablo, julieta, rodrigo];

console.log(arrayAlumnos);

//Función con el menu de opciones

function menu(){
    alert("Bienvenidos a Crazy4Muscle");
    let opcion = parseInt(prompt("Ingrese una opción: \n 1)Inscripción \n 2)Dar de baja \n 3)Consulta de Alumno \n 4) Salir"));
    return opcion;

}

function InscripcionAlumno(){
    let nombre = prompt("Ingrese su nombre: ");
    let apellido = prompt("Ingrese su apellido: ");
    let dni = parseInt(prompt("Ingrese su dni: "));
    let cuota = parseInt(prompt("Ingrese la cuota: "))
    let alumno = new Alumnos (nombre, apellido, dni, cuota);
    arrayAlumnos.push(alumno);
    console.log(arrayAlumnos);
}

//Función dar de baja un alumno

function bajaAlumno(){
    let dni = parseInt(prompt("Ingrese el DNI del alumno: "));
    let alumno = arrayAlumnos.find(alumno => alumno.dni===dni);
    let indice = arrayAlumnos.indexOf(alumno);
    arrayAlumnos.splice(indice,1);
    console.log(arrayAlumnos);
    alert("El alumno  fue dado de baja");
}

function consultaAlumno() {
    let dni = parseInt(prompt("Ingrese el DNI del alumno: "));
    let alumno = arrayAlumnos.find(alumno => alumno.dni === dni);
    console.log(alumno);
}

//Funcion para salir del programa

function salir(){
    alert("Gracias por visitar Crazy4Muscle.");
}

// Ejecuto el programa:

let opcion = menu();

switch(opcion){
    case 1:
        InscripcionAlumno();
        break;
    case 2:
        bajaAlumno();
        break;
    case 3:
        consultaAlumno();
        break;
    case 4:
        salir();
    default:
        alert("Opción no valida")
        break;
}



