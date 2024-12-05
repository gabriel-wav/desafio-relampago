let tentativas = 0;
let numeroSorteado = Math.floor(Math.random() * 10) + 1; // Gera o número aleatório entre 1 e 10

// Função para reiniciar o jogo
function resetGame() {
    tentativas = 0;
    numeroSorteado = Math.floor(Math.random() * 10) + 1; // Gera um novo número aleatório
    document.getElementById("resultado").textContent = '';
    document.getElementById("tentativas").textContent = '';
    document.getElementById("quantidade").value = ''; // Limpa o campo de input
}

// Função para tratar o envio do formulário
document.getElementById("meuForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o envio do formulário

    // Captura o valor inserido no campo quantidade
    let quantidade = parseInt(document.getElementById("quantidade").value);

    // Verifica se o número inserido é válido (entre 1 e 10)
    if (quantidade >= 1 && quantidade <= 10) {
        tentativas++; // Aumenta o número de tentativas
        let tentativasRestantes = 5 - tentativas;

        // Verifica se o jogador acertou o número
        if (quantidade === numeroSorteado) {
            document.getElementById("resultado").textContent = `Parabéns, você acertou! O número sorteado foi ${numeroSorteado}.`;
            document.getElementById("tentativas").textContent = ''; // Não mostra mais tentativas após acertar
        } else {
            // Se não acertou, verifica se ainda tem tentativas
            if (tentativas < 5) {
                document.getElementById("resultado").textContent = `Tente novamente! O número sorteado não foi ${quantidade}.`;
                document.getElementById("tentativas").textContent = `Tentativas restantes: ${tentativasRestantes}`;
            } else {
                // Se não acertou após 5 tentativas
                document.getElementById("resultado").textContent = `Você não conseguiu acertar! O número sorteado era ${numeroSorteado}.`;
                document.getElementById("tentativas").textContent = ''; // Não mostra mais tentativas após 5 tentativas
            }
        }
    } else {
        document.getElementById("resultado").textContent = "Por favor, insira um número válido entre 1 e 10.";
    }
});

// Adiciona o evento de reset no botão
document.getElementById("resetButton").addEventListener("click", resetGame);
