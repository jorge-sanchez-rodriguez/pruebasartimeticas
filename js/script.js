
// Pide un numero y comprueba si son numeros
const getNumber = () => {
    let num;
    num = parseInt(prompt("Introduce un número"));
    if (isNaN(num)) {
        alert("El valor introducido no es un número");
        return getNumber();
    }
    return num;
}
//  Suma dos números
const addNumbers = (num1, num2) => {
    let result = num1 + num2;
    return result;
}

//  Resta dos números
const substractNumbers = (num1, num2) => {
    let result = num1 - num2;
    return result;
}

// 
const multiplyNumbers = (num1, num2) => {
    let result = num1 * num2;
    return result;
}

//  Divide dos números
const divideNumbers = (num1, num2) => {
    if (num2 === 0) {
        return "Error: No se puede dividir entre cero";
    } else {
        let result = num1 / num2;
        return result;
    }

}

//  Muestra los resultados
const showResults = (num1, num2) => {
    console.log("El resultado de la suma es: " + addNumbers(num1, num2));
    console.log("El resultado de la resta es: " + substractNumbers(num1, num2));
    console.log("El resultado de la multiplicación es: " + multiplyNumbers(num1, num2));
    console.log("El resultado de la división es: " + divideNumbers(num1, num2));
}

// Petición de números
let num1 = getNumber();
let num2 = getNumber();

// Mostrar resultados
showResults(num1, num2);

