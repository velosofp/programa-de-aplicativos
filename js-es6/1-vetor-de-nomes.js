 // Criando um vetor.

const listaNomes = ['Marta', 'José', 'João']

console.log('\nExibindo todos os elemntos do vetor: ')
console.log(listaNomes)

console.log('\nExibindo o primeiro elemento do vetor: ')
console.log(listaNomes[0])

console.log('\nAdicionando um elemento no vetor: ')
listaNomes.push('Marilia')
console.log(listaNomes)

// Sua vez, adicione seu nome no vetor.

console.log('\nAdicionando meu nome no vetor: ')
listaNomes.push('Felipe Veloso')
console.log(listaNomes)

console.log('\nRemovendo o primeiro elemento no vetor: ')
listaNomes.shift()
console.log(listaNomes)

console.log('\nRemovendo um elemento específico no vetor: ')
// A partir do indice 2 removever apenas um elemnto.
listaNomes.splice(2,1)
console.log(listaNomes)

console.log('\nRemovendo o último elemento no vetor: ')
listaNomes.pop()
console.log(listaNomes)

