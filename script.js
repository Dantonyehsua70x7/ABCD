function boasVindas() {
    alert("Bem-vindo ao nosso site!");
}

function mudarTexto() {
    document.getElementById("textoRisco").innerText = 
    "O uso equilibrado da tecnologia é essencial!";
}

function somar() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    let resultado = n1 + n2;

    document.getElementById("resultado").innerText =
    "Resultado: " + resultado;
}