// Atribuindo valores
const real = 5.04
const euro = 0.8
const peso = 349.98


// Recebendo o valor em dólares
let valor = Number(prompt("Digite o valor em dólares"))


// Convertendo para as moedas
let converterReal = (a) => a * real
let converterEuro = (a) => a * euro
let converterPeso = (a) => a * peso


// Convertendo o resultado
let conversaoReal = converterReal(valor)
let conversaoEuro = converterEuro(valor)
let conversaoPeso = converterPeso(valor)


// Exibindo a informação
console.log(conversaoReal)
console.log(conversaoEuro)
console.log(conversaoPeso)
