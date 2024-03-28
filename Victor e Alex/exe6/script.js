document.getElementById('salaryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var horasNormais = parseFloat(document.getElementById('horasNormais').value);
    var horasExtras = parseFloat(document.getElementById('horasExtras').value);

    var valorHorasNormais = horasNormais * 10.00;
    var valorHorasExtras = horasExtras * 15.00;
    var salarioTotal = valorHorasNormais + valorHorasExtras;
    var poupanca = salarioTotal * 0.08;

    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>Valor de horas normais: R$ ${valorHorasNormais.toFixed(2)}</p>
        <p>Valor de horas extras: R$ ${valorHorasExtras.toFixed(2)}</p>
        <p>Total de ganho no ano: R$ ${salarioTotal.toFixed(2)}</p>
        <p>Valor a guardar na poupança: R$ ${poupanca.toFixed(2)}</p>
    `;
});
