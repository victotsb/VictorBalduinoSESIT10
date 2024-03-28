var estagiarios = [];

function adicionarEstagiario() {
    var novoEstagiario = {
        cod: parseInt(prompt("Qual o código do estagiário?")),
        nome: prompt("Qual o nome do estagiário?"),
        ano: parseInt(prompt("Qual o ano de nascimento do estagiário?")),
        sal: []
    };

    for (var i = 0; i < 12; i++) {
        novoEstagiario.sal.push(parseFloat(prompt("Qual o " + (i + 1) + "º salário do estagiário?")));
    }

    estagiarios.push(novoEstagiario);
    atualizarFormulario();
}

function calcularSalarios() {
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    estagiarios.forEach(function(estagiario, index) {
        var sal_anual = estagiario.sal.reduce(function(acc, curr) {
            return acc + curr;
        }, 0);

        resultadoDiv.innerHTML += `
            <div class="resultado-item">
                <h3>Estagiário ${index + 1}</h3>
                <p>Código: ${estagiario.cod}</p>
                <p>Nome: ${estagiario.nome}</p>
                <p>Ano de nascimento: ${estagiario.ano}</p>
                <p>Salário anual: ${sal_anual.toFixed(2)}</p>
            </div>
        `;
    });
}

function atualizarFormulario() {
    var formContainer = document.getElementById('formContainer');
    formContainer.innerHTML = '';

    estagiarios.forEach(function(estagiario, index) {
        formContainer.innerHTML += `
            <div class="estagiario-item">
                <h3>Estagiário ${index + 1}</h3>
                <p>Código: ${estagiario.cod}</p>
                <p>Nome: ${estagiario.nome}</p>
                <p>Ano de nascimento: ${estagiario.ano}</p>
                <p>Salários mensais: ${estagiario.sal.join(', ')}</p>
            </div>
        `;
    });
}
