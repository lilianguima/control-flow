const prompt = require ('prompt-sync')()

const numeroText = prompt ('Digite um número: ')
const numero = Number(numeroText)

const Par = Math.sqrt(numero, 2)
const impar = Math.pow(numero, 2)

if (numero % 2 ==0 ){
    console.log(`Numero par e sua raiz quadrada: ${Par} `) }
        else{ console.log(`Numero Ímpar e seu número elevado ao quadrado: ${impar}`) 
}

    