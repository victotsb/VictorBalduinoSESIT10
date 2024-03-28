document.getElementById('notaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var id = parseInt(document.getElementById('id').value);
    var notas = [];
    var somadasnotas = 0;

    for (var i = 1; i <= 12; i++) {
        var nota = parseFloat(prompt("Qual sua " + i + "ª nota (de 0 a 100):"));
        notas.push(nota);
        somadasnotas += nota;
    }

    var media = somadasnotas / 12;
    var conceito = calcularConceito(media);

    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>ID: ${id}</p>
        <p>Média: ${media.toFixed(2)}</p>
        <p>Conceito: ${conceito}</p>
    `;
});

function calcularConceito(media) {
    if (media >= 90) {
        return 'A';
    } else if (media >= 75) {
        return 'B';
    } else if (media >= 60) {
        return 'C';
    } else if (media >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}
