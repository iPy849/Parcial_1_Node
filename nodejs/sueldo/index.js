function calcularSueldoConImpuestos(sueldoDiario) {
    const IVA = 0.16; 
    const sueldoSinImpuestos = sueldoDiario * 30; 
    const sueldoConImpuestos = sueldoSinImpuestos + (sueldoSinImpuestos * IVA);
    return sueldoConImpuestos;
  }
  
  module.exports = calcularSueldoConImpuestos;
  