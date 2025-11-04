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
  // I understand if and else if statements from some previous experience
  // with Java, using switch statement for practice in addition to if, else if,
  // else statements.  I have commented out the if, else if and else statements
  // for this exercise below the switch statement.
  switch (currentTemp) {
    case value:
      console.log(`BRRRR it is ${currentTemp}°C, ${veryCold} outside!`)
      break;
    case value:
      console.log(`BRR it is ${currentTemp}°C, ${cold} outside!`)
      break;
    case value:
      console.log(`Very nice, it is ${currentTemp}°C, ${warm} outside!`)
      break;
    case value:
      console.log(`Sun is out and it is ${currentTemp}°C, ${hot} outside!`)
      break;
    default:
      console.log(`Holy moly! It is ${currentTemp}°C, ${veryHot} outside!`)
      break;
  }
}