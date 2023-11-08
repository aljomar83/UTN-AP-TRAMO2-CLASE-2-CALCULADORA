function sumar() {
  const num1 = parseFloat(document.getElementById('input1').value);
  const num2 = parseFloat(document.getElementById('input2').value);
  document.getElementById('resultado').textContent = num1 + num2;
}

function restar() {
  const num1 = parseFloat(document.getElementById('input1').value);
  const num2 = parseFloat(document.getElementById('input2').value);
  document.getElementById('resultado').textContent = num1 - num2;
}

function multiplicar() {
  const num1 = parseFloat(document.getElementById('input1').value);
  const num2 = parseFloat(document.getElementById('input2').value);
  document.getElementById('resultado').textContent = num1 * num2;
}

function dividir() {
  const num1 = parseFloat(document.getElementById('input1').value);
  const num2 = parseFloat(document.getElementById('input2').value);
  if (num2 === 0) {
      document.getElementById('resultado').textContent = "No se puede dividir por cero.";
  } else {
      document.getElementById('resultado').textContent = num1 / num2;
  }
}
