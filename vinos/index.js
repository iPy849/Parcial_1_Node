// Realizar un programa para una tienda de vinos: Si el vino a la venta 
// es blanco, el descuento es de un 5%. Si el vino a la venta es tinto, el 
// descuento es del 10%. El usuario introduce el artículo (o su código) y 
// el programa muestra el descuento correspondiente por pantalla.

const readline = require('readline')

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Vinos disponibles:\n- Vino Blanco -> 400mxn\n- Vino Tinto -> 300mxn")

interface.question("Escriba el artículo que desea comprar: ", item => {
    let price;
    let discount;
    
    if(item.toLowerCase() === "vino blanco") {
        price = 400;
        discount = 5;
    } else if(item.toLowerCase() === "vino tinto") {
        price = 300;
        discount = 10;
    }
    const finalPrice = price - (price * (discount/100))
    console.log(`Item: ${item}\nPrecio original: ${price}mxn\nDescuento: ${discount}%\nPrecio final es ${finalPrice}mxn`)
    interface.close()
});