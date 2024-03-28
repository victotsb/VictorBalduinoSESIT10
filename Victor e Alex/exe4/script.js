function calcularArea() {
    const PI = 3.1415;
    var raio = parseFloat(document.getElementById("raio").value);

    if (isNaN(raio)) {
        alert("Por favor, insira um valor válido para o raio.");
        return;
    }

    var area = PI * raio * raio;
    document.getElementById("resultado").textContent = "A área do círculo é " + area.toFixed(3) + " m².";
}
