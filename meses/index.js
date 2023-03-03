// Realizar un programa en el que el usuario introduce el número del mes  (1 al 12) y 
// muestre en pantalla si el mes tiene 30 o 31 días.

const readline = require('readline')

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface.question("Introduce un mes del año en formato numérico (1-12): ", month => {
    month = parseInt(month)
    if (isNaN(month) || month < 1 || month > 12) {
        console.log("Vuelve a correr el programa e introduce una entrada numérica (1-12)");
    } else {
        const days = month % 2 == 0 ? (month == 2 ? 28 : 30) : 31;
        console.log(`El mes ${month} tiene ${days} días`);
    }
    interface.close()
});