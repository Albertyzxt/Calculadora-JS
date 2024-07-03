const prompt = require("prompt-sync")({ sigint: true });

console.log("Bem vindo a calculadora!");

let operacao = prompt("Escolha uma operação: (+, -, *, /, %) ");

if (
  operacao !== "+" &&
  operacao !== "-" &&
  operacao !== "*" &&
  operacao !== "/" &&
  operacao !== "%"
) {
  console.log("Você deve digitar um dos simbolos mostrados!");
  return;
}

let entrada = Number(prompt("Digite o primeiro número: "));

if (isNaN(entrada)) {
  console.log("Você deve digitar um número!");

  return;
}

let entrada2 = Number(prompt("Digite o segundo número: "));

if (isNaN(entrada2)) {
  console.log("Você deve digitar um número!");

  return;
}

switch (operacao) {
  case "+":
    console.log(`O resultado de sua adição é: ${plus(entrada, entrada2)}`);
    break;
  case "-":
    console.log(`O resultado de sua subtraçãdo é: ${minus(entrada, entrada2)}`);
    break;
  case "*":
    console.log(
      `O resultado de sua multiplicação é: ${multiply(entrada, entrada2)}`
    );
    break;
  case "/":
    console.log(`O resultado de sua divisão é: ${divide(entrada, entrada2)}`);
    break;
  case "%":
    console.log(
      `O resultado de sua porcentagem é: ${percentage(entrada, entrada2)}`
    );
    break;
}

function plus(entrada, entrada2) {
  let resultado;
  resultado = entrada + entrada2;

  return resultado.toFixed(2);
}

function minus(entrada, entrada2) {
  let resultado;
  resultado = entrada - entrada2;

  return resultado.toFixed(2);
}

function multiply(entrada, entrada2) {
  let resultado;
  resultado = entrada * entrada2;

  return resultado.toFixed(2);
}

function divide(entrada, entrada2) {
   let resultado;

    if ((entrada = "0")) {
       return "Nenhum número pode ser dividido por zero!";
  } else if ((entrada2 = "0")) {
       return"Nenhum número pode ser dividido por zero!";
  } else {
    resultado = entrada / entrada2;

    return resultado.toFixed(2);
  }
}

function percentage(entrada, entrada2) {
  let resultado;
  resultado = (entrada * entrada2) / 100;

  return resultado.toFixed(2);
}
