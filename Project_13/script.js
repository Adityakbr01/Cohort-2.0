const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Blue",

    getInfo: function () {
        return `${this.year} ${this.make} ${this.model} in ${this.color}`;
    }
}


// Display car info in the console
console.log("Car Object:", car);
console.log("Car Info:", car.getInfo());


// Display car info dynamically in the browser
const carInfoDiv = document.createElement('div');
carInfoDiv.style.fontFamily = "Arial, sans-serif";
carInfoDiv.style.fontSize = "18px";
carInfoDiv.style.margin = "20px";
carInfoDiv.style.color = "#838383ff";


carInfoDiv.innerHTML = `
    <h2>Car Information</h2>
    <p><strong>Make:</strong> ${car.make}</p>
    <p><strong>Model:</strong> ${car.model}</p>
    <p><strong>Year:</strong> ${car.year}</p>
    <p><strong>Color:</strong> <span style="color: ${car.color}">${car.color}</span></p>
    <p><strong>Full Info:</strong> ${car.getInfo()}</p>
`;

carInfoDiv.children[0].style.color = "#ff5733ff"; // Change h2 color
carInfoDiv.children[0].style.margin = "10px 0"; // Change h2 margin


document.body.appendChild(carInfoDiv);