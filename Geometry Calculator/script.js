function calculateVolume() {
    const shapeSelect = document.getElementById("shape");
    const dimensionInputs = document.getElementById("dimension-inputs");
    const resultElement = document.getElementById("result");
    
    dimensionInputs.innerHTML = "";

    const selectedShape = shapeSelect.value;

    if (selectedShape === "kubus") {
        dimensionInputs.innerHTML = `
            <label for="side">Side Length (cm):</label>
            <input type="number" id="side" placeholder="Enter side length">
        `;

    } else if (selectedShape === "balok") {
        dimensionInputs.innerHTML = `
            <label for="length">Length (cm):</label>
            <input type="number" id="length" placeholder="Enter length">
            <label for="width">Width (cm):</label>
            <input type="number" id="width" placeholder="Enter width">
            <label for="height">Height (cm):</label>
            <input type="number" id="height" placeholder="Enter height">
        `;

    } else if (selectedShape === "bola") {
        dimensionInputs.innerHTML = `
            <label for="radius">Radius (cm):</label>
            <input type="number" id="radius" placeholder="Enter radius">
        `;

    } else if (selectedShape === "limas segiempat") {
        dimensionInputs.innerHTML = `
            <label for="baseLength">Base Length (cm):</label>
            <input type="number" id="baseLength" placeholder="Enter base length">
            <label for="height">Height (cm):</label>
            <input type="number" id="height" placeholder="Enter height">
        `;

    } else if (selectedShape === "limas segitiga") {
        dimensionInputs.innerHTML = `
            <label for="baseLength">Base Length (cm):</label>
            <input type="number" id="baseLength" placeholder="Enter base length">
            <label for="height">Height (cm):</label>
            <input type="number" id="height" placeholder="Enter height">
        `;

    } else if (selectedShape === "tabung") {
        dimensionInputs.innerHTML = `
            <label for="radius">Radius (cm):</label>
            <input type="number" id="radius" placeholder="Enter radius">
            <label for="height">Height (cm):</label>
            <input type="number" id="height" placeholder="Enter height">
        `;

    } else if (selectedShape === "prisma segitiga") {
        dimensionInputs.innerHTML = `
            <label for="baseLength">Base Length (cm):</label>
            <input type="number" id="baseLength" placeholder="Enter base length">
            <label for="height">Height (cm):</label>
            <input type="number" id="height" placeholder="Enter height">
        `;

    } else if (selectedShape === "prisma segiempat") {
        dimensionInputs.innerHTML = `
            <label for="length">Length (cm):</label>
            <input type="number" id="length" placeholder="Enter length">
            <label for="width">Width (cm):</label>
            <input type="number" id="width" placeholder="Enter width">
            <label for="height">Height (cm):</label>
            <input type="number" id="height" placeholder="Enter height">
        `;

    } else if (selectedShape === "kerucut") {
        dimensionInputs.innerHTML = `
            <label for="radius">Radius (cm):</label>
            <input type="number" id="radius" placeholder="Enter radius">
            <label for="height">Height (cm):</label>
            <input type="number" id="height" placeholder="Enter height">
        `;
    }

    const calculateButton = document.createElement("button");
    calculateButton.textContent = "Calculate Volume";
    calculateButton.onclick = function () {
        const result = calculate(selectedShape);
        resultElement.textContent = `The Volume is: ${result.toFixed(2)} cm³`;
    };

    dimensionInputs.appendChild(calculateButton);
}

function calculate(selectedShape) {
    if (selectedShape === "kubus") {
        const side = parseFloat(document.getElementById("side").value);
        return Math.pow(side, 3);
    } 

    else if (selectedShape === "balok") {
        const length = parseFloat(document.getElementById("length").value);
        const width = parseFloat(document.getElementById("width").value);
        const height = parseFloat(document.getElementById("height").value);
        return length * width * height;
    } 

    else if (selectedShape === "bola") {
        const radius = parseFloat(document.getElementById("radius").value);
        return (4 / 3) * Math.PI * Math.pow(radius, 3);
    } 
    
    else if (selectedShape === "limas segiempat") {
        const baseLength = parseFloat(document.getElementById("baseLength").value);
        const height = parseFloat(document.getElementById("height").value);
        return (1 / 3) * Math.pow(baseLength, 2) * height;
    } 
    
    else if (selectedShape === "limas segitiga") {
        const baseLength = parseFloat(document.getElementById("baseLength").value);
        const height = parseFloat(document.getElementById("height").value);
        return (1 / 6) * Math.pow(baseLength, 2) * height;
    } 
    
    else if (selectedShape === "tabung") {
        const radius = parseFloat(document.getElementById("radius").value);
        const height = parseFloat(document.getElementById("height").value);
        return Math.PI * Math.pow(radius, 2) * height;
    } 
    
    else if (selectedShape === "prisma segitiga") {
        const baseLength = parseFloat(document.getElementById("baseLength").value);
        const height = parseFloat(document.getElementById("height").value);
        return (1 / 2) * baseLength * height;
    } 
    
    else if (selectedShape === "prisma segiempat") {
        const length = parseFloat(document.getElementById("length").value);
        const width = parseFloat(document.getElementById("width").value);
        const height = parseFloat(document.getElementById("height").value);
        return length * width * height;
    } 
    
    else if (selectedShape === "kerucut") {
        const radius = parseFloat(document.getElementById("radius").value);
        const height = parseFloat(document.getElementById("height").value);
        return (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    }

    return 0;
}

document.addEventListener("DOMContentLoaded", () => {
    const shapeSelect = document.getElementById("shape");
    shapeSelect.addEventListener("change", calculateVolume);
});
