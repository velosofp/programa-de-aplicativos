const usuarios = [
    {nome: 'Marta', idade: 30},
    {nome: 'José', idade: 40},
    {nome: 'Maria', idade: 50},
    {nome: 'Marcela', idade: 60},
    
]

console.log('\nExibindo todos os usuários do vetor: ')
usuarios.forEach(u => console.log(`${u.nome} tem ${u.idade} anos.`))

console.log('\nFiltrando usuários com idade acima de 50 anos: ')
const maiorDeCinquenta = usuarios.filter(u => u.idade >= 50)
maiorDeCinquenta.forEach(u => console.log(`${u.nome} tem ${u.idade} anos.`))

console.log('\nExibindo apenas os nomes: ')
const nomes = usuarios.map(u => u.nome)
nomes.forEach(nome => console.log(`${nome};`))


console.log('\Encontrando um usuario: ')
const usuarioEncontrado = usuarios.find(u => u.nome === 'Marta')
console.log(usuarioEncontrado)
console.log(`${usuarioEncontrado.nome} tem ${usuarioEncontrado.idade} anos.`)

console.log('\nMostra a soma de todos as idades: ')
const somaIdades =  usuarios.reduce((total, u) => total + u.idade, 0)
console.log(`Total das idades: ${somaIdades}`)

