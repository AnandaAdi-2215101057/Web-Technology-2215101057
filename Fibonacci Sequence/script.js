function generateFibonacci() {
    const inputElement = document.getElementById("input");
    const outputElement = document.getElementById("output");
    
    const n = parseInt(inputElement.value);
    
    if (!isNaN(n) && n > 0) {
        let fibonacci = [0, 1];
        
        for (let i = 2; i < n; i++) {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
        
        outputElement.innerHTML = `
            <p><u>Fibonacci Sequence with ${n} number:</u></p>
            <p><b>${fibonacci.join(", ")}</b></p>
        `;
    } else {
        outputElement.innerHTML = "<p>Please input the valid number <br><b>(positive number)</b></p>";
    }
}