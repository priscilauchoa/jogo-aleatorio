const aleatorio = function (min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numeroGerado = aleatorio(0, 50);
let numeroTentativa = Number(prompt('Faça uma aposta, digite um número'));

if (numeroGerado === numeroTentativa) {

    alert('Acertou de primeira Mizeravi!');
}
else {

    for (let i = 9; i >= 0; i--) {

        if (i === 0) {

            alert('Game Over!');
        }
        else if (numeroTentativa < numeroGerado) {

            numeroTentativa = Number(prompt(`Você ERROU. O numero digitado é menor que o numero gerado, digite outro número. Você possui ${i} vidas`));
        }
        else if (numeroTentativa > numeroGerado) {

            numeroTentativa = Number(prompt(`Você ERROU. O numero digitado é maior que o numero gerado, digite outro número. Você possui ${i} vidas`));
        }
        else {

            alert(`Acertou mizeravi em ${10 - i} tentativas`);
            break;
        }
    }
}

