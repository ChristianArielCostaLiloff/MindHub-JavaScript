/* 
let miNombre = "Christian";
let miApellido = "Costa";
let miEdad = 24;
let miMascota = "PeterHausen";
let edadMascota = 3;

console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);

let nombreCompleto = miNombre + miApellido;
let textoPresentacion =
  miNombre + miApellido + miEdad + miMascota + edadMascota;

let sumaEdades = miEdad + edadMascota;
let restaEdades = miEdad - edadMascota;
let productoEdades = miEdad * edadMascota;
let divisionEdades = miEdad / edadMascota;

console.log(nombreCompleto);
console.log(textoPresentacion);

console.log(sumaEdades);
console.log(restaEdades);
console.log(productoEdades);
console.log(divisionEdades);

miNombre = prompt("Nombre: ");
miApellido = prompt("Apellido : ");
miEdad = prompt("Edad : ");
miMascota = prompt("Nombre mascota: ");
edadMascota = prompt("Edad mascota: ");

console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);

nombreCompleto = miNombre + miApellido;
textoPresentacion = miNombre + miApellido + miEdad + miMascota + edadMascota;

sumaEdades = miEdad + edadMascota;
restaEdades = miEdad - edadMascota;
productoEdades = miEdad * edadMascota;
divisionEdades = miEdad / edadMascota;

console.log(nombreCompleto);
console.log(textoPresentacion);

console.log(sumaEdades);
console.log(restaEdades);
console.log(productoEdades);
console.log(divisionEdades);
 */
let alumno = {
  edad: 24,
  sexo: "M",
  nombre: "Christian",
  apellido: "Costa",
  carrera: "Ingenieria en Sistemas en Informacion",
};

console.table(alumno);
console.log(alumno.edad);
console.log(alumno.sexo);
console.log(alumno.nombre);
console.log(alumno.apellido);
console.log(alumno.carrera);

let mascota = {
  nombre: "PeterHausen",
  raza: "Salchicha",
  sexo: "M",
  apellido: "Costa",
  vacunas: "Todas",
};

console.table(mascota);
console.log(mascota.nombre);
console.log(mascota.raza);
console.log(mascota.sexo);
console.log(mascota.apellido);
console.log(mascota.vacunas);

let frutas = ["pera", "manzana", "platano", "mandarina", "Naranja"];

console.table(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);

let numeros = [1, 2, 3, 4, 5];

console.table(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

let familia = ["hermano", "hermana", "padre", "madre", "abuela"];

console.table(familia);
console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);

console.log(frutas[1] + " " + numeros[3] + " " + familia[4]);
