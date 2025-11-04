const convertToCelsius = (temp) => {
  const celsiusTemp = (temp - 32) / 1.8;
  const celsiusWholeTemp = Math.round(celsiusTemp);
  return celsiusWholeTemp;
}

const describeTemperature = (temp) => {
  const currentTemp = convertToCelsius(temp);
  const veryCold = "it is very cold";
  const cold = "it is cold";
  const warm = "it is warm";
  const hot = "it is hot";
  const veryHot = "it is very hot";

  if (currentTemp < 0) {
    console.log(`BRRRR it is ${currentTemp}°C. ${veryCold} outside!`)
  } else if (currentTemp < 20) {
    console.log(`BRR it is ${currentTemp}°C. ${cold} outside!`)
  } else if (currentTemp < 30) {
    console.log(`Very nice, it is ${currentTemp}°C. ${warm} outside!`)
  } else if (currentTemp < 40) {
    console.log(`Sun is out and it is ${currentTemp}°C. ${hot} outside!`)
  } else {
    console.log(`Holy moly! It is ${currentTemp}°C. ${veryHot} outside!`)
  }
}

const verifyInputIsNum = (number) => {
  if (number !== NaN) {
    describeTemperature(number);
  }
  else {
    userInput();
  }
}

const userInput = () => {
  const fahrenheitTempStr = prompt(`What is the current temperature in degrees Fahrenheit?`);
  const fahrenheitTemp = Number(fahrenheitTempStr);
  verifyInputIsNum(fahrenheitTemp);
}