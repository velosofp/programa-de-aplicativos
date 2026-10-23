const listaDeAlunos = [
    { nome: 'Ana', nota: 5.0 },
    { nome: 'Bruno', nota: 10.0 },
    { nome: 'Maria', nota: 2.0 },
    { nome: 'Marta', nota: 7.0 },
    { nome: 'Cecilia', nota: 6.0 },
]



console.log('\nMostre todos os alunos e suas notas: ')
listaDeAlunos.forEach(u => console.log(`${u.nome} - ${u.nota}.0`))



console.log('\nMostre a média geral da turma: ')
const media = listaDeAlunos.reduce((total, u) => total + u.nota / 5, 0)
console.log(`A média da turma é ${media}`)



console.log('\nMostre o nome e nota dos alunos com nota abaixo de 7.0: ')
const menorDeSete = listaDeAlunos.filter(u => u.nota < 7.0)
menorDeSete.forEach(u => console.log(`${u.nome} - ${u.nota}.0`))



console.log('\nMostre apenas o nome dos alunos com nota maior ou igual a 7.0: ')
const maiorDeSete = listaDeAlunos.filter(u => u.nota >= 7.0)
maiorDeSete.forEach(u => console.log(`${u.nome} - ${u.nota}.0`))



console.log('\nMostre o nome e a nota do aluno Bruno: ')
const alunoEncontrado = listaDeAlunos.find(u => u.nome === 'Bruno')
console.log(`${alunoEncontrado.nome} - ${alunoEncontrado.nota} .0`)



console.log('\nSome todas as notas: ')
const somaNotas = listaDeAlunos.reduce((total, u) => total + u.nota, 0)
console.log(`Total das notas: ${somaNotas}`)



console.log('\nListe todos os nomes dos alunos, sem mostrar suas notas: ')
listaDeAlunos.forEach(u => console.log(`${u.nome}`))

