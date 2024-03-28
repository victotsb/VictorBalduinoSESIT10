document.getElementById('contaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var numero = parseInt(document.getElementById('numero').value);
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = ''; // Limpa o conteúdo anterior, se houver
    conta(numero);
});

function conta(x) {
    if (x <= 100) {
        var resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent += x + '\n'; // Adiciona o número à div de resultado
        conta(x + 1); // Chama a função recursivamente com o próximo número
    }
}
