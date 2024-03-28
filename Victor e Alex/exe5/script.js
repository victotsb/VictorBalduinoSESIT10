document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var idade = parseInt(document.getElementById('idade').value);

    var resultDiv = document.getElementById('resultado');
    resultDiv.textContent = "A idade informada foi: " + idade;
});
