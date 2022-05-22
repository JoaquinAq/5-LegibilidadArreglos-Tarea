import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Clase Vie 20/05 (Tarea) - Arrays</h1>
<div>
  Ejercicios propuestos en módulo 5-Legebilidad de Arreglos
  <br> A - Invertir Arreglo
  <br> B - Tipos de números en arreglo
  <br>
  <br> Adiccional: función "sumaArrays" explicado en clase
  <br>
  <br> El código está dividido en "Funciones" y "Ejecución" (el menú del prompt)
</div>`;

// ------------ > Funciones < ---------------------
console.clear()

let v1: number[] = [1,3,7,9,9,5]
let v2: number[] = [6,9,2,5,9,4]

function sumaArrayTrampa (array1: number[], array2: number[]): number[]{
  let vSuma: number[] = new Array
  array1.forEach(function(elemento, indice, array){
    vSuma[indice] = (array1[indice]+array2[indice])
    });
  return vSuma;
}

function sumaArrays (array1: number[], array2: number[]): number[]{
  let arraysSumados: number[] = new Array;
  for (let i: number =0; i< array1.length; i++){
    arraysSumados[i] = (array1[i]+array2[i];
  }
  return arraysSumados
}

function invertirArreglo(): number[]{ 
  let userArrayLength: number = Number(prompt("Ingrese cantidad de valores del array"))
  let arrayDeNumeros: number []= new Array ();
  let newValue: string | null;

  while (arrayDeNumeros.length < userArrayLength) {
    let indice: number = arrayDeNumeros.length
    newValue = prompt (`Ingrese número para el elemento ${indice} del array`);
    arrayDeNumeros.unshift(Number(newValue));
  }
  return arrayDeNumeros;
}


function tiposDeNumeros(): number[] {

  // --- Creacion de array ---

  let userArrayLength: number = Number(prompt("Ingrese cantidad de valores del array"))
  let arrayDeNumeros: number []= new Array ();
  let newValue: string | null;

  while (arrayDeNumeros.length < userArrayLength) {
    let indice: number = arrayDeNumeros.length
    newValue = prompt (`Ingrese número para el elemento ${indice} del array`);
    arrayDeNumeros.push(Number(newValue));
    }
  
  // --- Conteo de tipos de números ---

  let positiveCounter: number = 0
  let negativeCounter: number = 0
  let ceroCounter: number = 0

  for (let i:number = 0; i< arrayDeNumeros.length; i++){ 
    switch (true) {
        case arrayDeNumeros[i] > 0:
          positiveCounter++;
          break;
        case arrayDeNumeros[i] === 0:
          ceroCounter++;
          break;
        case arrayDeNumeros[i] < 0:
          negativeCounter++;
          break;
        default:
          break;
      }
    }
    console.log("El array ingresado es", arrayDeNumeros)
    console.log("Cantidad de positivos: ", positiveCounter);
    console.log("Cantidad de ceros: ", ceroCounter);
    console.log("Cantidad de  negativos: ", negativeCounter);
}

//--------------> Ejecución <------------------------

let MSJ: string = `Elija opción \n A- Invertir arreglo \n B-Tipos de números en arreglo`;
let option: string | null = String(prompt(MSJ));

switch (option.toUpperCase()) {
  case `A`:
      console.log(invertirArreglo());
      break;
  case `B`: 
    tiposDeNumeros();
    break;
}
