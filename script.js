function factorial(n) {
  //your JS code here. If required.
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function trailingZeros(input) {
    let factorialResult = factorial(input);
    let count = 0;
    
    while (factorialResult % 10 === 0) {
        count++;
        factorialResult = factorialResult / 10;
    }
    
    return count;
}


const input = prompt("Enter a number");
alert(trailingZeros(input));
