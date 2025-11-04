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

  }
      console.log(`BRRRR it is ${currentTemp}°C, ${veryCold} outside!`)

      console.log(`BRR it is ${currentTemp}°C, ${cold} outside!`)

      console.log(`Very nice, it is ${currentTemp}°C, ${warm} outside!`)

      console.log(`Sun is out and it is ${currentTemp}°C, ${hot} outside!`)

      console.log(`Holy moly! It is ${currentTemp}°C, ${veryHot} outside!`)

  
}