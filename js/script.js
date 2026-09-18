

const getNumber = () => {
    let num;
    num = parseInt(prompt("Introduce un número"));
    if (isNaN(num)) {
        alert("El valor introducido no es un número");
        return getNumber();
    }
    return num;
}

const addNumbers = (num1, num2) => {
    let result = num1 + num2;
    return result;
}

const substractNumbers = (num1, num2) => {
    let result = num1 - num2;
    return result;
}

const multiplyNumbers = (num1, num2) => {
    let result = num1 * num2;
    return result;
}

const divideNumbers = (num1, num2) => {
    if (num2 === 0) {
        return "Error: No se puede dividir entre cero";
    } else {
        let result = num1 / num2;
        return result;
    }

}


let num1 = getNumber();
let num2 = getNumber();

console.log("El resultado de la suma es: " + addNumbers(num1, num2));
console.log("El resultado de la resta es: " + substractNumbers(num1, num2));
console.log("El resultado de la multiplicación es: " + multiplyNumbers(num1, num2));
console.log("El resultado de la división es: " + divideNumbers(num1, num2));