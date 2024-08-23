function escolherJogo() {
    let tipoJogo = Number(prompt('Digite o número do tipo de jogo de loteria desejado:'))
    let numeroSorteado
    switch (tipoJogo) {
        case 1: //Mega Sena
            numeroSorteado = getUniqueRandomNumbers(0, 61, 6)
            document.write(`Os números sorteados na Mega Sena foram: ${numeroSorteado}`)
            break;
        case 2: //Quina
            numeroSorteado = getUniqueRandomNumbers(0, 81, 5)
            document.write(`Os números sorteados na Quina foram: ${numeroSorteado}`)
            break;
        case 3: //Lotofácil
            numeroSorteado = getUniqueRandomNumbers(0, 26, 15)
            document.write(`Os números sorteados na Lotofácil foram: ${numeroSorteado}`)
        default:
            break;
    }
}

function getUniqueRandomNumbers(min, max, count) {
    const numbers = Array.from({ length: max - min + 1}, (_, i) => i + min)

    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
         console.log("Matriz: ", [numbers[i], numbers[j]] = [numbers[j], numbers[i]])
    }

    return numbers.slice(0, count)
}
