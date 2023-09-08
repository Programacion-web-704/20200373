//Esto es un comentario

/*
Esto es un comentario
de  varias lineas
*/

//CASO 1: Obtener la cabecera del documento
let cabecera = document.head;
console.log( cabecera )

//CASO 2: Obtener el body del documento
let cuerpo = document.body;
console.log( cuerpo );

//CASO 3: Obtener un nodo y obtener sus propiedades
let lpAntiguos = document.getElementById("antiguo");
console.log(lpAntiguos);

let arr_antiguos = [];
let nodos = lpAntiguos.childNodes; //Obtenemos la lista de los nodos hijos
for (i=0; i < nodos.length; i++){
    console.log( nodos[i] );

    if(nodos[i].nodeType == document.ELEMENT_NODE){
        arr_antiguos.push( nodos[i].textContent );
    }
}

document.getElementById("rpta1").innerHTML = arr_antiguos;

//CASO 4: Obtener un nodo y obtener sus propiedades
let lpModernos = document.getElementById("moderno");
console.log(lpAntiguos);

let arr_modernos = [];
let nodos2 = lpModernos.childNodes; //Obtenemos la lista de los nodos hijos
for (i=0; i < nodos2.length; i++){
    console.log( nodos2[i] );

    if(nodos2[i].nodeType == document.ELEMENT_NODE){
        arr_modernos.push( nodos2[i].textContent );
    }
}

document.getElementById("rpta2").innerHTML = arr_modernos;

//CASO 5: Concatenar arreglos
document.getElementById("rpta3").innerHTML = arr_antiguos.concat(arr_modernos);

//CASO 6: Concatenar los elementos de un arreglo para que sea un String. Dentro de cada elemento
document.getElementById("rpta3").innerHTML = arr_antiguos.join('*');

//CASO 7: Ubicar la pos de un elemen en un arreglo
let pos = arr_modernos.indexOf('Kotlin');
document.getElementById("rpta3").innerHTML = pos;

//CASO 8: Insertar un elemento
arr_modernos.splice(1, 0, 'Unlamda', 'Malbongue'); // En la posicion 1 inserta los elementos y con el 0 decimos que no se elimina nada. Lo demas se inserta
document.getElementById("rpta3").innerHTML = arr_modernos;

//CASO 9: Insertar y Borrar un elemento
arr_modernos.splice(3, 1, 'Intercal', 'ooAk!'); // Inserta en la posicion 3 inserta los elementos y elimina 1 elemento. Lo demas se inserta
document.getElementById("rpta4").innerHTML = arr_modernos;

//CASO 10: Borrar un elemento
arr_modernos.splice(3, 1) // Ve a la posicion 3 y elimina 1 elemento
document.getElementById("rpta5").innerHTML = arr_modernos;

//CASO 11: Obtener el ultimo elemento del arreglo
var elemento = arr_modernos.pop();
document.getElementById("rpta1").innerHTML = elemento;

//CASO 12: Obtener el primer elemento del arreglo
var elemento = arr_modernos.shift();    
document.getElementById("rpta1").innerHTML = elemento;

//CASO 13: Colocar el elemento al final del arreglo
arr_modernos.push("Dart");
document.getElementById("rpta1").innerHTML = arr_modernos;

//CASO 14: Otra forma de colocar el elemento al final del arreglo
arr_modernos[ arr_modernos.length ] = 'Opa';
document.getElementById("rpta1").innerHTML = arr_modernos;

//CASO 15: Colocar el elemento al inicio del arreglo
arr_modernos.unshift("SQL");
document.getElementById("rpta1").innerHTML = arr_modernos;

//CASO 16: Ordenar el arreglo
arr_modernos.sort();
document.getElementById("rpta1").innerHTML = arr_modernos;

//CASO 17: Ordenar un arreglo al revez
arr_modernos.reverse();
document.getElementById("rpta1").innerHTML = arr_modernos;

//Caso 18: 
var rpta = [];

rpta.push('<ol>');
rpta.push('<li> Peru - 0 </li>');
rpta.push('<li> Brazil - 3 </li>');
rpta.push('<li> Chile - 1 </li>');
rpta.push('</ol>');
var contenido = rpta.join(" ");

document.getElementById("rpta1").innerHTML = contenido;