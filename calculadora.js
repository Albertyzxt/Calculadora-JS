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

let numeroUm = Number(prompt("Digite o primeiro número: "));

if (isNaN(numeroUm)) {
  console.log("Você deve digitar um número!");

  return;
}

let numeroDois = Number(prompt("Digite o segundo número: "));

if (isNaN(numeroDois)) {
  console.log("Você deve digitar um número!");

  return;
}

switch (operacao) {
  case "+":
    console.log(`O resultado da adição é: ${plus(numeroUm, numeroDois)}`);
    break;
  case "-":
    console.log(`O resultado da subtraçãdo é: ${minus(numeroUm, numeroDois)}`);
    break;
  case "*":
    console.log(
      `O resultado da multiplicação é: ${multiply(numeroUm, numeroDois)}`
    );
    break;
  case "/":
    console.log(`O resultado da divisão é: ${divide(numeroUm, numeroDois)}`);
    break;
  case "%":
    console.log(
      `O resultado da porcentagem é: ${percentage(numeroUm, numeroDois)}`
    );
    break;
}

function plus(numeroUm, numeroDois) {
  let resultado = numeroUm + numeroDois;

  return resultado.toFixed(2);
}

function minus(numeroUm, numeroDois) {
  let resultado = numeroUm - numeroDois;

  return resultado.toFixed(2);
}

function multiply(numeroUm, numeroDois) {
  let resultado = numeroUm * numeroDois;

  return resultado.toFixed(2);
}

function divide(numeroUm, numeroDois) {
  if (numeroDois == 0) {
     return"Nenhum número pode ser dividido por zero!";
  } else {
      let resultado = numeroUm / numeroDois;

    return resultado.toFixed(2);
  }
}

function percentage(numeroUm, numeroDois) {
  let resultado = (numeroUm * numeroDois) / 100;

  return resultado.toFixed(2);
}
