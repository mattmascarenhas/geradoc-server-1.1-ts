function somar(a, b) {
  return a + b;
}

function mensagem() {
  alert("bem vindo");
}

function mensagemOption() {
  var elemento = document.getElementById("cursos").value;
  alert(elemento);
}

function mensagemLoad() {
  alert("pagina carregada");
}

function acao() {
  var texto = document.getElementsByTagName("h1")[2];
  alert(texto.innerHTML);
}

function exibirTexto() {
  var campo = document.getElementsByClassName("texto")[1];
  alert(campo.innerHTML);
}

function exibirCampo() {
  var campo = document.getElementById("campo").value;
  alert(campo);
}

function acaoCSS() {
  var campo = document.getElementsByTagName("h1")[4];
  campo.style.color = "#993335";
  campo.style.fontSize = "3rem";

  campo.innerHTML =
    "REACT DO REACT DO REACT DO REACT DO REACT DO REACT DO DAVI JONAS";
}
