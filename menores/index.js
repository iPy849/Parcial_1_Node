// Crea una función llamada numeroMenor() que toma tres números como entrada y 
// retornar el numero menor de ellos, si son iguales devolver un String  "números iguales".

function numeroMenor(a,b,c) {
    if (a == b && b == c){
        return "números iguales"
    }
    return a < b ? (a < c ? a : c) : (b < c ? b : c)
}

const dataSet = [
    [1, 2, 3],
    [3, 1, 2],
    [2, 3, 1],
    [1, 1, 1]
]

for (const data of dataSet) {
    console.log(`Data: ${data} -> Resultado: ${numeroMenor(...data)}`)
}