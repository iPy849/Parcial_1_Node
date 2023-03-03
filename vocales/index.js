// Escriba una función con el nombre de esVocal() que tome un carácter , devuelva 
// True si es vocal (no importa si es mayúscula o minúscula), y devuelva False 
// en caso contrario

function esVocal(char) {
    return ["a", "e", "i", "o", "u"].indexOf(char.toLowerCase()) !== -1;
}

const dataSet = [
    "A",
    "a",
    "",
    "z",
    "Z",
    "1",
]

for (const data of dataSet) {
    console.log(`Data: ${data} -> Resultado: ${esVocal(data)}`)
}