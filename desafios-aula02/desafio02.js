function converterTemperatura() {
    let valorTemperatura = Number(prompt('Digite o valor da temperatura a ser convertida:'))
    let unidadeInicial = prompt('Digite a unidade original da temperatura a ser convertida (C para Celsius, F para Fahrenheit ou K para Kelvin):')
    let unidadeFinal = prompt('Digite a unidade final da temperatura a ser convertida (C para Celsius, F para Fahrenheit ou K para Kelvin):')
    switch (unidadeInicial) {
        case 'K':
            switch (unidadeFinal) {
                case 'C':
                    document.write(`A temperatura convertida é: ${valorTemperatura - 273.15}°C`)
                    break;
                case 'F':
                    document.write(`A temperatura convertida é: ${valorTemperatura * 9 / 5 - 459.67}°F`)
                    break;
                default:
                    break;
            }
            break;  
        case 'C':
            switch (unidadeFinal) {
                case 'K':
                    document.write(`A temperatura convertida é: ${valorTemperatura + 273.15}K`)
                    break;
                case 'F':
                    document.write(`A temperatura convertida é: ${valorTemperatura * 9 / 5 + 32}°F`)
                    break;
                default:
                    break;
            }
        case 'F':
            switch (unidadeFinal) {
                case 'C':
                    document.write(`A temperatura convertida é: ${(valorTemperatura - 32) * 5 / 9}°C`)
                    break;
                case 'K':
                    document.write(`A temperatura convertida é: ${(valorTemperatura + 459.67) * 5 / 9}K`)
                    break;
                default:
                    break;
            }
        default:
            break;
    }
}