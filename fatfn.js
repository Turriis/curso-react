function Fn(){
    this.prop = 'propiedad' 
    return this
}

const r = new Fn()
//console.log(r.__proto__)

//Nos devolverá un objeto {}

//  Cuando usamos this dentro de una función, no nos devolvera el valor del return, lo ignorará

/*
    La palabra reservada de function tiene 2 usos:
    1.- Ser una función
    2.- Pueden tener un contexto de this y usarlos como herencia a partir de clases de prototipos en javascript

*/

const fatFn = () => {
    
    
    this.prop = 'propiedad' //Nos crea el objeto
    return this   //Nos devuelve el objeto

}

const r1 = fatFn()
console.log(r1);

//Con fatFn no se puede usar la palabra reservada new, solamente con la palabra reservada de function
//No existe el this dentro de las fat arrow function
//Deben de ser const a huevo
//Si no se tienen dentro del fat arrow las llaves para crear el returno, el valor que se asigne será implicito. Ejemplo:

const fnR = () => 2     //El valor es implicito
console.log(fnR())

const fnR2 = () => {    //Es lo mismo que el de arriba
    return 2
}

console.log(fnR2())