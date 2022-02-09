//CALLBACK -> É UMA FUNÇÃO QUE É PASSSADA COMO ARGUMENTO PARA OUTRA FUNÇÃO 

//addEventListener("click", callback)
//setInterval(callback, 200)
//setTimeout(callback, 200)

//[].forEach(callback)
//[].map(callback)
//[].filter(callback)

//--------------//



// function multiplicacao(num1, num2){
//     return num1 * num2
// }

// function subtracao(num1, num2){
//     return num1 - num2
// }


function soma(num1, num2){
    return num1 + num2
}

function calculadora(numero1, numero2, callbackOperacao){

    const resultado = callbackOperacao(numero1, numero2)
    
    return `Resultado da operacção é: ${resultado}`
}

//SOMAR 2 NUMEROS
const resultado  = calculadora(3,2, (num1, num2) => num1 + num2)

//arguments
// function add(){

//     let resultado = 0
//     for(let i = 0; i< arguments.length; i++){
//         resultado += arguments[i]
//     }
//     console.log(resultado)
// }
// add(1,2,3,43,5,655,3,2,4)

//RECOMENDADO => SPREAD
const add = (operacao, tipo, ...numeros) => {

    let resultado = 0
    for(let i = 0; i< numeros.length; i++){
        resultado += numeros[i]
    }
    console.log(resultado)
    console.log(operacao)
    console.log(tipo)
}

//add("soma","Numeros", 1,2,3,42,4)



//MÉTODOS
const arrayNUmeromes = [1,3,5,3,2,1,7,8,9]

function mostrarNumeros(currentValue,index, array){
    console.log("array["+index+"] = " + currentValue)
}

//newForEach
function newForEach(array, callback){
    
    for(let i = 0; i<array.length;i++){
        
        callback(array[i],i, array)

    }
}

//arrayNUmeromes.forEach(mostrarNumeros)
console.log("======== newForEach ========")
//newForEach(arrayNUmeromes,mostrarNumeros)


//MAP 
//ELE FAZ UM LOOP *** 
//CRIAR UM NOVO ARRAY PARA GUARDAR OS VALORES
//EXECUTA UM CALLBACK => RETURN 
//RETORNA UM NOVO ARRAY, COM O RESULTADO DA CALLBACK

function multiply(num){
    return num * 2;
}

let numbers = [1, 4, 9];

function newMap(array, callback){
    let newArray = []

    for(let i = 0; i<array.length; i++){
       
        newArray[i] = callback(array[i],i, array)
       
    }

    return newArray

}

let doubles = numbers.map(multiply);
let doubles2 = newMap(numbers, multiply)

console.log(doubles)
console.log(doubles2)



