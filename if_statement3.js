const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  // Write your code below
  const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  isTwoPlusTwo();
  console.log(isTwoPlusTwo.name);

  // checkB stores the invocation of the func callback, with val as the argument.

  const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
  let checkA=val+2;
  let checkB = func(val);
  }
  
  console.log();
  
  // Next, below the variables, write a conditional statement that checks if the value of checkA is equal to the value checkB. If true, return the result of the callback function. If false, return the string 'inconsistent results'. 3.Finally, using console.log(), log the invocation of checkConsistentOutput() with two arguments: the addTwo() function and any number.

  const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
  let checkA=val+2;
  let checkB = func(val);
  return checkA === checkB ? func(val):'inconsistent results';
  }
  console.log(checkConsistentOutput(addTwo,5));
  
// 1.Iterate over the fruits array to log I want to eat a plus the name of each fruit to the console. For example, I want to eat a mango.You may use any form of callback you prefer.

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruitsIWant => {
  console.log('I want to eat a ' + fruitsIWant)
});

// 1.Add your code under the animals array and before the line console.log(secretMessage.join(''));Use .map() to create a new array that contains the first character of each string in the animals array. Save the new array to a const variable named secretMessage.


const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

const secretMessage =animals.map(animal => animal[0]) ;
  console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(bigNumber => bigNumber/100);
console.log(smallNumbers);
// Create the smallNumbers array below

// Call the .filter() method on randomNumbers to return values that are less than 250. Save them to a new array called smallNumbers, declared with const.

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below

const smallNumbers = randomNumbers.filter(
numbers =>{
return numbers < 250
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Now let’s work with an array of strings. Invoke .filter() on the favoriteWords array to return elements that have more than 7 characters. Save the returned array to a const variable named longFavoriteWords.

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(words =>{
return words.length > 7;
});

// Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal.

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(indexOf =>{
  return indexOf === 'elephant';
});

// Let’s see if we can find the index of the first animal that starts with the letter 's'. Call .findIndex() on the animals array and return the index of the first element that starts with 's'. Assign the returned value to a const variable named startsWithS.

const startsWithS = animals.findIndex(indexOfStart =>{
    return indexOfStart[0] === 's'? true : false;
  });

  // Provide .reduce with an argument of a callback function. The callback function has two parameters. The first parameter is accumulator and the second parameter is currentValue. Use either a function expression or an arrow function.

  const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce(function(accumulator,currentValue){
  
});

// To check the value being used as we iterate through the array, add three statements to the function body of the callback:

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce(function(accumulator,currentValue){
console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
return accumulator+currentValue;
});

// Log the value of newSum to the console to see the return value of calling .reduce() on newNumbers.

console.log(newSum);

// While we have this code set up, let’s also check what happens if you add a second argument to .reduce(). The second argument acts as an initial value for the accumulator.

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce(function(accumulator,currentValue){
console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
return accumulator+currentValue;
},10);
console.log(newSum);

// In the code editor, there is an array called words. We want to create a new array of interesting words. The first thing we want to do is check if there are words that are fewer than 6 characters long. There is something missing in the words.some() method call. Fix this method so that true is printed to the console.

// The .some() method returned true, which means there are some words in the array that are shorter than six characters. Use the .filter() method to save any words longer than 5 characters to a new variable called interestingWords, declared with const.

const interestingWords = words.filter( myWords =>{
    return myWords.length >5;
    
    });

    // Complete the code between the parentheses to check if every element has more than 5 characters.

    console.log(interestingWords.every((word) => { 
        return word.length > 5;
      } ));

      // Replace the word method in the first method call with a method that will do something to each of the values in the array and return undefined.
      const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));
// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);

// The spaceship we have so far looks good but, unfortunately, is not very fast at hyperspace travel due to having an inferior fuel source. Make a new spaceship object named fasterShip with the same color as spaceship but with a Fuel Type equal to 'Turbo Fuel'.

// Write your fasterShip object literal below
let fasterShip = {
    color: 'silver',
    'Fuel Type': 'Turbo Fuel'
  };

  // Let’s use the dot operator to access the value of numCrew from the spaceship object in the code editor. Create a variable crewCount and assign the spaceship‘s numCrew property to it.

  let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  var crewCount=spaceship.numCrew;
  var planetArray = spaceship.flightPath;
  // Write your code below

  // Let’s use bracket notation to access the value of 'Active Mission' from the spaceship object in the code editor. Create a variable isActive and assign the spaceship‘s 'Active Mission' property to it.

  let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName = ['Active Mission'];
  let isActive = spaceship['Active Mission'];
  console.log(spaceship[propName]);
  // Write your code below
// Use the delete operator to remove the 'Secret Mission' property from the spaceship object.

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  spaceship.numEngines = 4;
  spaceship.color= 'glorious gold';
  delete spaceship['Secret Mission'];
  // Write your code below
  // Below the retreatMessage variable in the code editor, create an alienShip object. It should contain a method retreat() which will console.log() the retreatMessage.

  let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
let alienShip = {
  retreat(){
    console.log(retreatMessage);
  },takeOff(){
    console.log('Spim... Borp... Glix... Blastoff!');
  }
}
alienShip.retreat();
alienShip.takeOff();

// Right now the passengers property has a value of null. Instead, assign as its value an array of objects. These objects should represent the spaceship‘s passengers as individual objects. Make at least one passenger object in the array that has at least one key-value pair on it.
let spaceship = {
    passengers: [{name :'Space Dog'}],
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  var capFave = spaceship.crew.captain['favorite foods'][0];
  let firstPassenger =spaceship.passengers[0];
// Call your two functions with the spaceship object in the code editor, then console.log() the spaceship object to confirm those properties were changed/added.

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  
  let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
  }
  
  // Write your code below
  let remotelyDisable = obj => {
    obj.disabled = true;
  }
  greenEnergy(spaceship);
  
  remotelyDisable(spaceship);
  
  console.log(spaceship);
  // Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew names and degrees in the following format: '[crew member's name]: [crew member's degree]', i.e.,'Lily: Computer Engineering'.

  let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 
for(let num in spaceship.crew){
  console.log(`${num}: ${spaceship.crew[num].name}`);
}
for(let numo in spaceship.crew){
  console.log(`${spaceship.crew[numo].name}: ${spaceship.crew[numo].degree}`);
}
// Write your code below
// Let’s create a new object to practice using this.In main.js there is an object robot, add a property of model and assign to it a value of '1E78V2'. Add another property, energyLevel and assign to it a value of 100.

const robot = {
    model: '1E78V2',
   energyLevel: 100,
 
   provideInfo() {
     return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
   } 
 };
 
 
 // Adding properties to the robot object
 robot.model = '1E78V2';
 robot.energyLevel = 100;
 
 console.log(robot);
 console.log(robot.provideInfo());
 // Output: { model: '1E78V2', energyLevel: 100 }

 // Currently the .checkEnergy() method is not producing the correct output because it is using arrow function syntax.Refactor, or change, the method to use a function expression. You can write the function using either longhand or shorthand format.After refactoring the method, notice that .checkEnergy() has access to the other internal properties of the robot object

 const robot = {
    energyLevel: 100,
  checkEnergy(){
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  
  robot.checkEnergy();

  // Now take a look at the new recharge method in robot. .recharge() will add 30 to _energyLevel.What will happen now that _energyLevel isn’t a number?Call .recharge() on robot to find out.Notice that a funky string is printed to the console! This is known as a side-effect of type-coercion. No need to worry about what this means for now, but it’s important to understand that you can cause unwanted side-effects when mutating objects and their properties.

  const robot = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  robot._energyLevel = 'high';
  
  
  // Calling .recharge() on robot
  robot.recharge();
  
  console.log(robot.energyLevel);
  // Output: System malfunction: cannot retrieve energy level.
// Inside the getter method, add an if statement to check if this._energyLevel is a number using the typeof operator. If that condition is truthy, return 'My current energy level is ENERGYLEVEL'. Replace ENERGYLEVEL with the value of this._energyLevel.Make sure you return the string instead of logging it to the console.  

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
      get energyLevel() {
      // Function body is left blank for now
          if (typeof this._energyLevel === 'number') {
        return `My current energy level is ${this._energyLevel}`;
      }else {
        return 'System malfunction: cannot retrieve energy level';
      }
    }
  };
  console.log(robot.energyLevel);

  //Currently, in robot there is a getter method for numOfSensors but no setter method! What if we need to add or remove some sensors? Let’s fix that problem.

  const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
  
    // Getter method for numOfSensors
    get numOfSensors() {
      if (typeof this._numOfSensors === 'number') {
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.';
      }
    },
  
    // Setter method for numOfSensors
    set numOfSensors(num) {
      if (typeof num === 'number' && num >= 0) {
        this._numOfSensors = num;
      } else {
        console.log('Pass in a number that is greater than or equal to 0');
      }
    }
  };
  
  // Example usage:
  robot.numOfSensors = 20; // Sets _numOfSensors to 20
  console.log(robot.numOfSensors); // Output: 20
  
  robot.numOfSensors = -5; // Invalid input, will log a message
  console.log(robot.numOfSensors); // Output: 20 (unchanged)
  robot.numOfSensors._numOfSensors =100;
  console.log(robot.numOfSensors);
 
  //Instead of making individual robots like we’ve been doing, let’s make a factory function to make robots as we please!, Create a factory function named robotFactory that has two parameters model and mobile. Make the function return an object. In the object, add a key of model with the value of the model parameter. Add another property that has a key of mobile with a value of the mobile parameter.Then add a method named beep without a parameter that will log 'Beep Boop' to the console.   

  function robotFactory(model, mobile) {
    return {
      model: model,
      mobile: mobile,
  
      // Method to make the robot beep
      beep() {
        console.log('Beep Boop');
      }
    };
  }
  
  // Example usage
  const robot1 = robotFactory('1E78V2', true);
  const robot2 = robotFactory('2A92V3', false);
  
  console.log(robot1.model); // Output: 1E78V2
  console.log(robot1.mobile); // Output: true
  robot1.beep(); // Output: Beep Boop
  
  console.log(robot2.model); // Output: 2A92V3
  console.log(robot2.mobile); // Output: false
  robot2.beep(); // Output: Beep Boop
  
  const tinCan = robotFactory('P-500', true);
  
  console.log(tinCan.model); // Output: P-500
  console.log(tinCan.mobile); // Output: true
  tinCan.beep(); // Output: Beep Boop
  
// Use the property value shorthand and refactor the factory function in main.js
const robotFactory = (model, mobile) => {
    return {
      model, // Property value shorthand
      mobile, // Property value shorthand
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  // To check that the property value shorthand technique worked:
  const newRobot = robotFactory('P-501', false);
  console.log(newRobot.model); // Output: P-501
  console.log(newRobot.mobile); // Output: false
// Use destructured assignment to create a const variable named functionality that extracts the functionality property of robot.If you need a reminder on how to use destructured assignment, review the example in the narrative or check the hint.  

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
  // Destructuring the functionality property
  const { functionality } = robot;
  
  // Calling the beep method through functionality
  functionality.beep(); // Output: Beep Boop

  // Now what if we want another object that has the properties of robot but with a few additional properties. Object.assign() sounds like a great method to use, but like the previous examples we should check Object.assign() documentation at MDN.Declare a const variable named newRobot. newRobot will be a new object that has all the properties of robot and the properties in the following object: {laserBlaster: true, voiceRecognition: true}. Make sure that you are not changing the robot object!

  const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
  };
  
  // The additional properties to be added to the new object
  const additionalProperties = {
    laserBlaster: true,
    voiceRecognition: true
  };
  
  // Using Object.assign() to create a new object with robot's properties and the additional properties
  const newRobot = Object.assign({}, robot, additionalProperties);
  
  console.log(newRobot);
  // Output: { model: 'SAL-1000', mobile: true, sentient: false, armor: 'Steel-plated', energyLevel: 75, laserBlaster: true, voiceRecognition: true }
  
  
