// ----- IMPORTANTE -----

// IMPORTANTE!: Para este checkpoint se les brindarán las implementaciones ya realizadas en las
// homeworks de Queue, LinkedLis y BinarySearchTree. Sobre dicha implementación van a tener que agregar nuevos
// métodos o construir determinadas funciones explicados más abajo. Pero todos los métodos ya implementados
// en las homeworks no es necesario que los vuelvan a definir.

const { Queue, Node, LinkedList, BinarySearchTree } = require("./DS.js");

// ----------------------

// ----- Recursión -----

// EJERCICIO 1
// Implementar la función objContains: debe buscar dentro de un objeto anidado un par {clave: valor}
// especifico. Tanto el objeto como el nombre de la propiedad y su valor serán recibidos por parámetro.
// En el caso de que encuentre el valor indicado en cualquier nivel del objeto debe devolver true,
// de lo contrario, devolver false.
// Aclaraciones:
//   - Un objeto anidado es un objeto que dentro tiene uno o más objetos.
//     Ej:
//        const user = {
//            id: 6,
//            email: 'homero@maxpower.com',
//            infoPersonal: {
//                nombre: 'Homero Simpson',
//                direccion: {
//                    calle: 'Avenida Siempreviva',
//                    numero: 742,
//                    barrio: 'Springfield',
//                    estado: 'Massachusetts'
//                }
//            }
//        }
//   - Caso que devuelve true  --> objContains(user, "barrio", "Springfield");
//   - Caso que devuelve false --> objContains(user, "empleo", "Empleado en planta nuclear");
// Pista: utilizar typeof para determinar si el valor de una propiedad es un objeto para aplicar
// allí la recursión

var objContains = function (obj, prop, value) {
  for (let key in obj) {
    let propiedad = key;
    let valor = obj[key];
    if (prop === propiedad && value === valor) {
      console.log(true);
      return true;
    } else if (typeof valor === "object") {
      // debugger
      let objeto = obj[key];
      return objContains(objeto, prop, value);
    }
  }
  return false;
};

// EJERCICIO 2
// Secuencia inventada: f(n) = (f(n-1) + f(n-2) + f(n-3)) x 2
// Donde las primeras tres posiciones son dadas por el array recibido por parametro y a partir de
// la siguiente se calcula como la suma de los 3 números anteriores multiplicados por dos.
// array es un arreglo de 3 posiciones que puede contener números o strings, aquellas posiciones que
// sean números debemos dejarlas tal cual están pero las que tengan strings debemos calcular su cantidad
// de caracteres para usarlos en la secuencia.
// Por ejemplo si recibimos: ["Franco", 1, "Henry"] deberíamos tener los siguientes 3 valores iniciales
// de la secuencia f(0) = 6, f(1) = 1 y f(2) = 5 (Ya que "Franco" tiene 6 caracteres y "Henry", 5)
// A partir de ahí la cuarta posición sería  (6 + 1 + 5) * 2 = 24 y así sucesivamente
// La función secuenciaHenry debe devolver el enésimo numero de la serie, por ejemplo para el array
// antes mencionado:
// secuencia: 6, 1, 5, 24, 60, 178, 524
// secuenciaHenry(0) // 6  ya que el elemento de la posición 0 es cero
// secuenciaHenry(1) // 1 ya que el elemento de la posición 1 es 1
// secuenciaHenry(6) // 524 ya que el elemento de la posición 6 es 524
// Para números negativos de n debe devolver false
function secuenciaHenry(array, n) {}

// ---------------------

// ----- LinkedList -----

// EJERCICIO 3
// Implementar el método size dentro del prototype de LinkedList que deberá retornar el tamaño actual de
// la LinkedList. En el caso de que la lista se encuentre vacía deberá retornar cero.
// Ejemplo:
//    var lista = new LinkedList();
//    lista.size(); --> 0
//    lista.add(1);
//    lista.size(); --> 1
//    lista.add(2);
//    lista.add(3);
//    lista.size(); --> 3

LinkedList.prototype.size = function () {
  let current = this.head;
  let count = 0;
  if (!current) return 0;
  while (current) {
    if (current.next) {
      count++;
      current = current.next;
    } else {
      count++;
      return count;
    }
  }
};

// EJERCICIO 4
// Implementar el método addInPos dentro del prototype de LinkedList que deberá agregar un elemento en
// la posición indicada. Ambos datos serán brindados como parámetro (pos, value). Donde "pos" será la
// posición en la cual se deberá agregar el valor "value". En el caso de que la posición en la que se
// quiera hacer la inserción no sea válida (Supere el tamaño de la lista actual) debe devolver false.
// Si el nodo fue agregado correctamente devolver true.
// Aclaración: la posición cero corresponde al head de la LinkedList
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> [2] --> [4]
//    lista.addInPos(2, 3);
//    Ahora la lista quedaría: Head --> [1] --> [2] --> [3] --> [4]
// Ejemplo 2:
//    Suponiendo que la lista está vacía: Head --> null
//    lista.addInPos(2, 3); --> Debería devolver false ya que no es posible agregar en la posición 2
//    sin antes tener cargada la posición 0 y 1.

LinkedList.prototype.addInPos = function (pos, value) {
  //ME VAN A DAR UNA POSICION Y EL VALOR   2     6
  // let current = this.head
  //   if(!current) return false
  //   if(pos === 0){
  //       debugger
  //       let aux =  this.head //me guardo el head "2"
  //       let newNode = new Node(value);// creo el nuevo nodo con el nuevo value
  //       this.head = newNode;//this.head toma el como nodo el newNodex
  //       newNode.next = aux
  //       return true
  //     } else {
  //       // let current = this.head
  //       debugger
  //       let i = 0
  //       while( i < pos - 1){
  //         debugger
  //         pos--
  //         current = current.next
  //         // return true
  //       }

  //       let aux = current.next
  //       let newNode = new Node(value);
  //       current.next = newNode
  //       newNode.next = aux
  //       return true
  //   }
  let current = this.head;
  if (!current) return false;
  if (pos === 0) {
    debugger;
    let aux = this.head; //me guardo el head "2"
    let newNode = new Node(value); // creo el nuevo nodo con el nuevo value
    this.head = newNode; //this.head toma el como nodo el newNodex
    newNode.next = aux;
    return true;
  }
  // let current = this.head
  debugger;
  let i = 0;

  //        v
  //  1  2  3  4  5  6

  //     0  <  3
  //     1  <  3
  //     2  <  3
  while (i < pos - 1) {
    debugger;
    i++;
    current = current.next;
    // return true
  }

  let aux = current.next;
  let newNode = new Node(value); // node: {value:15 next: null}
  current.next = newNode;
  newNode.next = aux;
  return true;
};

// EJERCICIO 5
// Implementar el método removeFromPos dentro del prototype de LinkedList que deberá remover un elemento de
// la posición indicada ("pos" será la posición del elemento a remover).
// En el caso de que la posición en la que se quiera hacer el remove no sea válida (Supere el tamaño de
// la lista actual o sea un número negativo) debe devolver false.
// Si el nodo fue removido correctamente devolver el valor del nodo.
// Aclaración: la posición cero corresponde al head de la LinkedList
// Ejemplo 1:
//                                                 0       1       2       3
//    Suponiendo que la lista actual es: Head --> [1] --> [2] --> [3] --> [4]
//    lista.removeFromPos(2);
//    Ahora la lista quedaría: Head --> [1] --> [2] --> [4] y la función debería haber devuelto el valor 3
// Ejemplo 2:
//    Suponiendo que se pide una posición inválida: removeFromPos(8) --> false

LinkedList.prototype.removeFromPos = function (pos) {
  var current = this.head;
  if (!this.head || Math.sign(pos) === -1) return false;
  // if() return false;
  if (pos === 0) {
    // this.head = current.next
    // return current.value
    let value = this.head.value;
    this.head = this.head.next;
    return value;
  }
  let i = 0;
  //pos --> 3

  //        v
  //  1  2  3  4  5
  //    0 < 2
  //    1 > 2
  while (i < pos - 1) {
    console.log("current: ", current);
    i++;
    current = current.next;
  }
  let value = current.next.value;
  current.next = current.next.next;
  return value;
};

// ----------------------

// ----- QUEUE -----

// EJERCICIO 6
// Implementar la función controlAcces: a partir de una Queue que va a recibir como paráemtro que tiene
// en cada posición un objeto que va a representar a una persona y tiene la siguiente forma:
// {
//   fullname: "Franco Etcheverri",
//   age: 26,
//   ticket: {
//     number: 1,
//     event: "Tomorrowland"
//   }
// }
// La idea es ir verificando uno a uno si la primer persona de la cola tiene los requisitos necesarios para
// ingresar al evento correspondiente (también recibido por parámetro). Los requisitos que debe cumplir son:
// - Ser mayor de 18 años (18 inclusive es válido)
// - Tener un ticket que corresponda con el evento (prop event de ticket)
// - Que no haya ingresado ya otra persona al evento con ese mismo número de ticket
// Finalmente la función debe devolver un arreglo con todos los nombres de las personas que pudieron ingresar
// Importante!: Aquellas personas que no cumplan con los requisitos para ingresar deben ser removidos de la cola

var controlAcces = function (queue, event) {
  let newQueue = [];
  let ticket = [];
  const arrayPersonas = Object.values(queue);
  arrayPersonas.forEach((personas) => {
    const persona = Object.values(personas);
    persona.forEach((valPersonas) => {
      const propiedadPersona = Object.values(valPersonas);
      const evento = Object.values(propiedadPersona[2]);
      if (
        propiedadPersona[1] > 18 &&
        propiedadPersona[2].hasOwnProperty("number") &&
        evento[1] === event
      ) {
        if (!ticket.includes(evento[0])) {
          newQueue.push(propiedadPersona[0]);
        }
      }
      ticket.push(evento[0]);
    });
  });
  console.log("newQueue: ", newQueue);
  return newQueue;
};

// ---------------

// ----- BST -----

// EJERCICIO 7
// Implementar la función generateBST para que a partir de un array recibido como parametro
// genere un BinarySearchTree. Devolver dicho arbol generado.
// Ejemplo:
//    - array(16,6,23,2,17,31,14,5);
//    - arbol generado:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//      \
//       5

var generateBST = function (array) {
  let bst = new BinarySearchTree();
  array.forEach((e) => {
    if (!bst.value) bst.value = e;
    else bst.insert(e);
  });
  return bst;
};

// ---------------

// Ejercicio 8
// Dado un arreglo ordenado, encontrar el índice de un elemento específico pasado como parámetro
// utilizando el método conocido como búsqueda binaria. En el caso de que el número buscado no se encuentre
// en el array devolver -1.
// Para mayor información sobre dicho método:
//    - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
//    - https://en.wikipedia.org/wiki/Binary_search_algorithm
// Ejemplo:
//    array = [1,2,3,4,5,6,7,8,9,10];
//    binarySearch(array, 2) --> Devolvería 1 ya que array[1] = 2
//    [Donde 2 sería el número sobre el cuál queremos saber su posición en el array]

var binarySearch = function (array, elemento) {
  let index = undefined;
  if (!array.includes(elemento)) return -1;
  else {
    array.forEach((e) => {
      if (e === elemento) index = e - 1;
    });
  }
  return index;
};

// EJERCICIO 9
// Ordená un arreglo de números usando un bubble sort pero con algunas particularidades.
// El nuevo arreglo debe ser devuelto.
// El algortimo va a recibir un arreglo de objetos de la siguiente forma:
// {
//   name: "Notebook",
//   price: 1200,
//   review: 8
// }
// Esos objetos deben ser ordenados en función de lo que indique los siguientes parámetros
// "firstOrd", "secondOrd" los cuales van a tener alguna de las propiedades del objeto anterior
// para saber cual va a ser la que debemos tomar para el ordenamiento. La "secondOrd" se usa en los
// casos en los cuales para la "firstOrd" tengan el mismo valor.
// var array = [
//   {name: "Notebook", price: 1200, review: 8},
//   {name: "Smartphone", price: 300, review: 9},
//   {name: "TV", price: 800, review: 1},
//   {name: "PS5", price: 1200, review: 7}
// ]
// Ejemplo 1:
// specialSort(array, "price") --> Debería quedar:
// [
//   {name: "Smartphone", price: 300, review: 9},
//   {name: "TV", price: 800, review: 1},
//   {name: "Notebook", price: 1200, review: 8}
//   {name: "PS5", price: 1200, review: 7}
// ]
// Ejemplo 2:
// specialSort(array, "price", "review") --> Debería quedar:
// [
//   {name: "Smartphone", price: 300, review: 9},
//   {name: "TV", price: 800, review: 1},
//   {name: "PS5", price: 1200, review: 7},
//   {name: "Notebook", price: 1200, review: 8}
// ]
// (Siempre el ordenamiento es de menor a mayor sea cual fuera la propiedad indicada para el orden)

// console.log("array: ",array)
// function callback(element, index, array){
//   if(element.price){
//     if(element.price > )
//   }
// }
// array.forEach(e => {
//   let product = e
//   let valueProduct = Object.values(product)
//   //debe de ordenarse de menor a mayor
//   console.log("valueProduct",valueProduct)
// })
var specialSort = function (array, firstOrd, secondOrd) {
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < array.length - 1; i++) {
      let property = undefined;
      let property2 = undefined;
      if (firstOrd === "price") property = array[i].price; property2 = array[i + 1].price;
      if (firstOrd === "review") property = array[i].review; property2 = array[i + 1].review;
      if (property > property2) {
        let aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
        swap = true;
      }
    }
  }
  return array
};

// ----- Closures -----

// EJERCICIO 10
// Implementar la función closureSum que recibe un parámetro (numFijo) y que debe retornar otra función
// que también debe recibir un parámetro y debe devolver la suma de este últimom parámetro con numFijo.
// Ejemplo 1:
//    var sumaCinco = closureSum(5);
//    sumaCinco(2);  --> Devolverá 7 (Ya que 2 + 5 = 7)
//    sumaCinco(11); --> Devolverá 16 (Ya que 11 + 5 = 16)
// Ejemplo 2:
//    var sumaDiez = closureSum(10);
//    sumaDiez(2);  --> Devolverá 12 (Ya que 2 + 10 = 12)
//    sumaDiez(11); --> Devolverá 21 (Ya que 11 + 10 = 21)

function closureSum(numFijo) {
  return function addMoneditas(argumento2) {
    return numFijo + argumento2;
  };
}

// ------------------- No Cambies nada de aqui abajo ----------------------------

module.exports = {
  objContains,
  secuenciaHenry,
  LinkedList,
  Queue,
  controlAcces,
  generateBST,
  binarySearch,
  specialSort,
  closureSum,
};
