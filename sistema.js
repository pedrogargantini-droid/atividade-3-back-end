function soma() {
    var v1 = parseInt(document.getElementById("v1").value);
    var v2 = parseInt(document.getElementById("v2").value);
    document.getElementById("res").innerHTML = "Resposta: " + (v1 + v2);
}

function sub() {
    var v1 = parseInt(document.getElementById("v1").value);
    var v2 = parseInt(document.getElementById("v2").value);
    document.getElementById("res").innerHTML = "Resposta: " + (v1 - v2);
}

function mul() {
    var v1 = parseInt(document.getElementById("v1").value);
    var v2 = parseInt(document.getElementById("v2").value);
    document.getElementById("res").innerHTML = "Resposta: " + (v1 * v2);
}

function div() {
    var v1 = parseInt(document.getElementById("v1").value);
    var v2 = parseInt(document.getElementById("v2").value);
    document.getElementById("res").innerHTML = "Resposta: " + (v1 / v2);
}
