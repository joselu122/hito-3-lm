
  function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    let displayValue = document.getElementById("display").value;
    let result;
    try {
        // Reemplazar símbolo de porcentaje con la función de JavaScript para calcular porcentaje
        displayValue = displayValue.replace(/%/g, '/100*');
        result = eval(displayValue);
    } catch (error) {
        result = "Error";
    }
    document.getElementById("display").value = result;
}

// Función para calcular la raíz cuadrada
function squareRoot() {
    let displayValue = document.getElementById("display").value;
    let result;
    try {
        result = Math.sqrt(eval(displayValue));
    } catch (error) {
        result = "Error";
    }
    document.getElementById("display").value = result;
}



function squareRoot() {
  let displayValue = document.getElementById("display").value;
  let result;
  try {
      result = Math.sqrt(eval(displayValue));
  } catch (error) {
      result = "Error";
  }
  document.getElementById("display").value = result;
}
