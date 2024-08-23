// function imprimir() {
//     document.write('<p>Contando</p>')
// }

// setInterval(imprimir, 1000)

// setInterval(() => {
//     contador.innerHTML += 'Hello!<br/>'
// }, 1000);

// let contador = document.getElementById('contador')

// var timer = setInterval(() => {
//     contador.innerHTML += 'Hello!<br/>'
// }, 1000);

// function stopTimer() {
//     clearInterval(timer)
// }

// setTimeout(() => {
//     contador.innerHTML += 'Timeout!<br/>'
// }, 2000);

// function contador(params) {
//     time += 1
//     contador.innerHTML = `${time}`

// }

// PARTE 2
// var nome = 'Victor'

// if (nome === 'Victor') {
//     var profissao = 'Professor'
//     console.log(profissao)
// }

// if (nome === 'Victor') {
//     let cargo = 'CEO'
//     console.log(cargo)
// }

// if (nome === 'Victor') {
//     const status = 'Sucesso'
//     console.log(status)
// }

// PARTE 3

// let pessoa = {
//     nome: 'Victoria',
//     idade: 32,
//     cargo: 'Fullstack',
//     nacionalidade: 'Brasileiro(a)'
// }
// console.log(pessoa);

// console.log(`Nome: ${pessoa.nome}, \nIdade: ${pessoa.idade}, \nCargo: ${pessoa.cargo}, \nNacionalidade: ${pessoa.nacionalidade}`);

// let users = [
//     { nome: 'John', idade: 23, cargo: 'CEO' },
//     { nome: 'Doe', idade: 32, cargo: 'Fullstack' },
//     { nome: 'Sabrina', idade: 33, cargo: 'WebDev' },
//     { nome: 'Yolanda', idade: 48, cargo: 'DevOps' },
// ]

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
//     console.log(users[i].nome)
//     console.log(users[i].idade)
//     console.log(users[i].cargo)

// }

// let pessoa = {
//     nome: 'Victoria',
//     idade: 32,
//     cargo: 'Fullstack',
//     nacionalidade: 'Brasileiro(a)'
// }

// let {nome, idade, cargo, nacionalidade} = pessoa
// console.log(nome, idade, cargo, nacionalidade);

// PARTE 4
// let numerosPares = [2, 4, 6, 8, 10]
// let numerosImpares = [...numerosPares, 1, 3, 5, 7, 9]

// console.log(numerosImpares);


// let pessoa = {
//     nome: 'Bob',
//     idade: 32
// }

// let profissional = {
//     ...pessoa,
//     cargo: 'Dev'
// }

// console.log(profissional);

// function user(info) {
//     let data = {
//         ...info,
//         status: 'ok',
//         inicio: 2024
//     }
//     console.log(data);

// }

// user({ nome: 'John', email: 'john@example.com'})

// function user(...nomes) {
//     console.log(nomes);

// }

// user('Victor', 'Stephen', 'John', 'Doe')

// PARTE 5
// function gerarNumeros(...numeros) {
//     console.log(numeros);

//     const numeroSorteado = Math.floor(Math.random() * numeros.length)
//     console.log(numeros[numeroSorteado])

// }

// gerarNumeros(2, 4, 5, 67, 43, 12, 78)

//PARTE 6
// let nomes = ['Victor', 'Sabrina', 'Matheus', 'John']
// nomes.map((item, index) => {
//     console.log(`Index:  ${index}, Item: ${item}`);
// })

/*
() => {}

    parenteses
    seta =>
    chave
*/

// function somaRegular(a, b) {
//     let total = a + b
//     return console.log(total);
// }

// let soma = (b, c) => {
//     let result = b + c
//     console.log(result);
// }

// somaRegular(10, 10)
// soma(20, 10)