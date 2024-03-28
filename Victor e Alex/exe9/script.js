document.addEventListener("DOMContentLoaded", function() {
    var mat1 = [];
    var valor = 1;
    var soma = 0;

    // Preenchendo a matriz e calculando a soma
    for (var l = 0; l < 4; l++) {
        mat1[l] = [];
        for (var c = 0; c < 4; c++) {
            mat1[l][c] = valor;
            valor *= 2;
            soma += mat1[l][c];
        }
    }

    // Exibindo a matriz na página
    var matrizDiv = document.getElementById("matriz");
    for (var i = 0; i < 4; i++) {
        var row = document.createElement("div");
        for (var j = 0; j < 4; j++) {
            var cell = document.createElement("span");
            cell.textContent = "|" + mat1[i][j] + "|";
            row.appendChild(cell);
        }
        matrizDiv.appendChild(row);
    }

    // Exibindo a soma na página
    var somaDiv = document.getElementById("soma");
    somaDiv.textContent = "A soma da matriz = " + soma;
});
