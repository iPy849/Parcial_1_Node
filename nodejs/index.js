const calcularSueldoConImpuestos = require('./sueldo');

const sueldoDiario = 1000;
const sueldoConImpuestos = calcularSueldoConImpuestos(sueldoDiario);

console.log(`El sueldo con impuestos es: ${sueldoConImpuestos}`);