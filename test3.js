// current temperature in kelvin degrees.
const kelvin = 0;
// converting kelvin to celsius.
const celsius = kelvin - 273;
// converting celisius to fahrenheit.
let fahrenheit = celsius * (9/5) + 32;
// round  down fahrenheit variable.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// converting celisius to fahrenheit.
let Newton = celsius * (33/100);
// round  down fahrenheit variable.
Newton = Math.floor(Newton);
console.log(`The temperature is ${Newton} in Newton degrees.`);
