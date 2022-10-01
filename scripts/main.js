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

//EJ 1
let num1 = 1,
  num2 = 2;

if (num1 > num2) {
  console.log("El primer numero es el mas grande");
}

//EJ 2
if (num1 != num2) {
  console.log("Numero distintos");
} else {
  console.log("Numeros iguales");
}

//EJ 3
if (num1 > num2) {
  console.log("El primer numero es mas grande.");
} else {
  if (num1 < num2) {
    console.log("El segundo numero es mayor");
  } else {
    console.log("Los numero son iguales");
  }
}

//EJ 4
let num3 = 3;
if (num1 < num2 && num1 < num3) {
  console.log("El primer numero es el mas pequeño");
} else {
  if (num2 < num1 && num2 < num3) {
    console.log("El segundo numero es el mas pequeño");
  } else {
    console.log("El tercer numero es el mas pequeño");
  }
}

//EJ 5
let persona1 = {
  nombre: "Segismundo",
  edad: 23,
  altura: 1.8,
};
let persona2 = {
  nombre: "Rodolfo",
  edad: 19,
  altura: 1.98,
};

if (persona1.altura < persona2.altura) {
  console.log(persona1.nombre + " es mas alta");
} else {
  console.log(persona2.nombre + " es mas alta");
}
if (persona1.edad < persona2.edad) {
  console.log(persona1.nombre + " es mayor");
} else {
  console.log(persona2.nombre + " es mayor");
}

//EJ 6
let usuario = {
  nombre: prompt("Ingresa tu nombre."),
  edad: prompt("Ingrese su edad."),
  altura: parseInt(prompt("Ingrese su altura")),
  vision: parseInt(prompt("Ingrese su vision (0-10)")),
};

if (usuario.edad >= 18 && usuario.altura >= 150 && usuario.vision >= 8) {
  console.log("Eres apto para trabajar");
}

//EJ 7
let persona = {
  nombre: prompt("Ingresa tu nombre.").toLowerCase(),
  pase: prompt("Ingrese su pase (vip/normal)."),
  entrada: null,
};

if (prompt("Tiene entrada (si/no)").toLowerCase() === "si") {
  persona.entrada = true;
} else {
  persona.entrada = false;
}

if (persona.entrada) {
  if (prompt("Desea usar la entrada?").toLowerCase() === "no") {
    persona.entrada = false;
  }
}

if (
  persona.nombre === "christian" ||
  persona.pase === "vip" ||
  persona.entrada === true
) {
  console.log("Bienvenido");
} else {
  if (prompt("Desea comprar una entrada? $1000").toLowerCase() === "si") {
    if (parseInt(prompt("Ingrese el dinero disponible")) >= 1000) {
      console.log("Se adquirio una entrada. Bienvenido");
    } else {
      console.log("No posee dinero suficiente");
    }
  } else {
    console.log("No adquirio una entrada, hasta la proxima");
  }
}

//EJ 8
let numeroIncognita = 2;
console.log("Ingrese un numero del 1 al 10.");
let numeroIngresado = parseInt(prompt("Intento 1: "));
if (numeroIngresado === 2) {
  console.log("Adivinaste el numero");
} else {
  if (numeroIngresado > numeroIncognita) {
    console.log("El numero ingresado es mayor");
  } else {
    console.log("El numero ingresado es menor");
  }
  numeroIngresado = parseInt(prompt("Intento 2: "));
  if (numeroIngresado === 2) {
    console.log("Adivinaste el numero");
  } else {
    if (numeroIngresado > numeroIncognita) {
      console.log("El numero ingresado es mayor");
    } else {
      console.log("El numero ingresado es menor");
    }
    numeroIngresado = parseInt(prompt("Intento 3: "));
    if (numeroIngresado === 2) {
      console.log("Adivinaste el numero");
    } else {
      console.log("Fallaste los 3 intentos");
    }
  }
}
//EJ 9
let edad = parseInt(prompt("Ingrese su edad"));

if (edad >= 0 && edad <= 12) {
  console.log("Infante");
} else {
  if (edad >= 13 && edad <= 18) {
    console.log("Adolescente");
  } else {
    if (edad >= 19 && edad <= 45) {
      console.log("Adulto");
    } else {
      if (edad >= 100) {
        console.log("Seguro que tienes esa edad?");
      } else {
        console.log("Anciano");
      }
    }
  }
}

//EJ 10
console.log("Piedra papel o tijeras 2 jugadores");
let player1 = prompt("Jugador 1:").toLowerCase();
let player2 = prompt("Jugador 2:").toLowerCase();

if (player1 !== "papel" || player1 !== "piedra" || player1 !== "tijeras") {
  console.log("¡El jugador 1 hizo trampa!");
} else {
  if (player2 !== "papel" || player2 !== "piedra" || player2 !== "tijeras") {
    console.log("¡El jugador 2 hizo trampa!");
  } else {
    if (
      (player1 === "papel" && player2 === "piedra") ||
      (player1 === "piedra" && player2 === "tijeras") ||
      (player1 === "tijeras" && player2 === "papel")
    ) {
      console.log("¡Gana el jugador 1!");
    } else {
      console.log("¡Gana el jugador 2!");
    }
  }
}

//EJ 11
let color = prompt("Ingrese un color").toLowerCase();

switch (color) {
  case "blanco":
    console.log("Falta de color");
    break;
  case "negro":
    console.log("Falta de color");
    break;
  case "verde":
    console.log("Color de la naturaleza");
    break;
  case "azul":
    console.log("Color del agua");
    break;
  case "amarillo":
    console.log("Color del Sol");
    break;
  case "rojo":
    console.log("Color del fuego");
    break;
  case "marron":
    console.log("Color de la tierra");
    break;
  default:
    console.log("Buena eleccion no lo teniamos pensado");
    break;
}

//EJ 12
let valor1 = Number(prompt("Ingrese el primer valor", 6));
let valor2 = parseInt(prompt("Ingrese el segundo valor", 3), 10);
let operador = prompt(
  "Que operacion desea realizar (suma/resta/multiplicacion/division)",
  "suma"
).toLowerCase();
let resultad;
switch (operador) {
  case "suma":
    resultado = valor1 + valor2;
    console.log("Resultado: " + resultado);
    break;
  case "resta":
    resultado = valor1 - valor2;
    console.log("Resultado: " + resultado);
    break;
  case "multiplicacion":
    resultado = valor1 * valor2;
    console.log("Resultado: " + resultado);
    break;
  case "division":
    resultado = valor1 / valor2;
    if (valor2 !== 0) {
      console.log("Resultado: " + resultado);
    } else {
      console.log("ERROR. No se puede dividir por 0");
    }
    break;
  default:
    console.log("Weon");
    break;
}

//EJ 13
let nomb = prompt("Indique su nombre");
let ape = prompt("Indique su apellido");
let dni = prompt("Indique su edad");

console.log("Nombre: " + nomb + "\nApellido: " + ape + "\nDNI:" + dni);
if (prompt("¿Son correcto los datos?").toLowerCase() === "si") {
  let DNI = {
    nombre: nomb,
    apellido: ape,
    Dni: dni,
  };
  console.log("Registro existoso.");
} else {
  console.log("Datos incorrectos vuelva a intentarlo en 1 mes.");
}
