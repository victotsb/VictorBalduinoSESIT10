document.getElementById('tuitionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var matricula = document.getElementById('matricula').value;
    var valor = document.getElementById('valor').value;

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `O aluno ${matricula} paga mensalmente R$ ${valor}.`;
});
