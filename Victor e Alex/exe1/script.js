document.getElementById('competitorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var code = document.getElementById('code').value;
    var age = document.getElementById('age').value;
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `O competidor ${code}, tem ${age} anos, pesa ${weight} Kg e tem ${height} de altura.`;
});
