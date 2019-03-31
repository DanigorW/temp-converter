let celcius = document.querySelector("#celcius > input");
let fahrenheit = document.querySelector("#fahrenheit > input");
let kelvin = document.querySelector("#kelvin > input");

const roundNumber = num => Math.round(num * 100) / 100;

const celciusConverter = () => {
  let tempC = parseFloat(celcius.value);
  let tempF = tempC * (9 / 5) + 32;
  let tempK = tempC + 273.15;
  fahrenheit.value = roundNumber(tempF);
  kelvin.value = roundNumber(tempK);
};

const fahrenheitConverter = () => {
  tempF = parseFloat(fahrenheit.value);
  tempC = (tempF - 32) * (5 / 9);
  tempK = (tempF + 459.67) * (5 / 9);
  celcius.value = roundNumber(tempC);
  kelvin.value = roundNumber(tempK);
};

const kelvinConverter = () => {
  tempK = parseFloat(kelvin.value);
  tempC = tempK - 273.15;
  tempF = (9 / 5) * (tempK - 273) + 32;
  celcius.value = roundNumber(tempC);
  fahrenheit.value = roundNumber(tempF);
};

celcius.addEventListener("input", celciusConverter);
fahrenheit.addEventListener("input", fahrenheitConverter);
kelvin.addEventListener("input", kelvinConverter);
