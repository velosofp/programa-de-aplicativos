// Vetor de números.
const numeros = [1, 2, 3, 4, 5]

console.log('\nExibindo todo so números: ')
console.log(numeros)

console.log(numeros)
const numerosMultiplicadosPorDois = numeros.map(n => n * 2)
console.log(numerosMultiplicadosPorDois)
console.log('\nMultiplicando todos os números por 2: ')

console.log('\nExibindo apenas os números pares: ')
console.log(numeros)
const numerosPares = numeros.filter(n => n % 2 === 0)
console.log(numerosPares)

console.log('\nExibindo a soma de todos os números: ')
console.log(numeros)
const soma = numeros.reduce((soma, atual) => soma + atual, 0)
console.log(soma)