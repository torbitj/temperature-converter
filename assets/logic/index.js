const convertToCelsius = (temp) => {
  const celsiusTemp = (temp - 32) / 1.8;
  const celsiusWholeTemp = Math.round(celsiusTemp);
  return celsiusWholeTemp;
}

const describeTemperature = (temp) => {
  const currentTemp = convertToCelsius(temp);
  const itIsStr = "it is"

  if (currentTemp < 0) {
    alert(`BRRRR it is ${currentTemp}°C. ${itIsStr} very cold outside!`)
  } else if (currentTemp < 20) {
    alert(`BRR it is ${currentTemp}°C. ${itIsStr} cold outside!`)
  } else if (currentTemp < 30) {
    alert(`Very nice, it is ${currentTemp}°C. ${itIsStr} warm outside!`)
  } else if (currentTemp < 40) {
    alert(`Sun is out and it is ${currentTemp}°C. ${itIsStr} hot outside!`)
  } else {
    alert(`Holy moly! It is ${currentTemp}°C. ${itIsStr} very hot outside!`)
  }
}

const userInput = () => {
  const fahrenheitTempStr = prompt(`What is the current temperature in degrees Fahrenheit?`);
  const isNumber = isNaN(fahrenheitTempStr);
  
  //Verify if input is a number (Have workd with Java before, "!" shorthand works in js too)
  if (!isNumber) {
    const fahrenheitTemp = Number(fahrenheitTempStr);
    describeTemperature(fahrenheitTemp);
  }
  else {
    alert(`Must be a number, please try again!`)
    userInput();
  }
}

userInput();