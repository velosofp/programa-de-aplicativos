//funcao que ira executar quando clicar no botao
function gerarTabuada () {
    //pega o valor do campo input nohtml
    const numeroInput = document.getElementById('numero-input')
    //converte o texto q veio do html para numero inteiro
    let numero = parseInt(numeroInput.value)

    //pega o elemnento onde a tabuada sera exibida no html
    const resultadoDiv = document.getElementById('resultado-aqui')

    //limpa o conteudo anterior no campo onde o resultado sera exibido
    resultadoDiv.innerHTML = ''
    resultadoDiv.classList.remove('magia-ativa')

    //Adiciona o titulo a tavuada com tag h2
    resultadoDiv.innerHTML += `<h2>Tabuada do número ${numero}</h2>`

    //Laço de repeticao para gerar tabuada de 1 a 10
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`
    }

    requestAnimationFrame(() => resultadoDiv.classList.add('magia-ativa'))
    document.body.classList.remove('feitico-ativo')
    requestAnimationFrame(() => document.body.classList.add('feitico-ativo'))
    setTimeout(() => document.body.classList.remove('feitico-ativo'), 900)
}

//pega o elemento onde a tabuada sera exibida no html e associa a uma constante
const btnGerar = document.getElementById('btn-gerar')
//faz a funcao gerarTabuada() ser executada quando clicar
btnGerar.addEventListener('click', gerarTabuada)