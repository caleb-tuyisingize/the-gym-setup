let sale=true;
sale=false;
if(sale===true){
  console.log('Time to buy!');
}else{
    console.log("Time to wait for a sale.");
  }
  let hungerLevel=7;
if(hungerLevel>7){
  console.log("Time to eat!");
}else{
  console.log("We can eat later!");
}
let mood = 'sleepy';
let tirednessLevel = 6;
if(mood === 'sleepy' && tirednessLevel > 8){
  console.log("time to sleep");
}else{
  console.log("not bed time yet");
}

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
let tool = '';
tool="marker";
// Use short circuit evaluation to assign  writingUtensil variable below:

let writingUtensil = tool || "pen";

console.log(`The ${writingUtensil} is mightier than the sword.`);


let isLocked = false;

isLocked?  console.log('You will need a key to open the door.'):console.log('You will not need a key to open the door.');


let isCorrect = true;

isCorrect?console.log('Correct!'):console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!'?console.log('I love that!'):console.log("I don't love that!");



let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if(season === 'winter'){
  console.log('It\'s winter! Everything is covered in snow.');
}else if(season === 'fall'){
  console.log('It\'s fall! Leaves are falling!');
  }else if(season === 'summer'){
    console.log('It\'s sunny and warm because it\'s summer!');
}else{
  console.log('Invalid season.');
}

let athleteFinalPosition = 'first place';
switch(athleteFinalPosition){
  case "first place":
    console.log("You get the gold medal!");
    break;

  case "second place":
    console.log("You get the silver medal!");
    break;

  case "third place":
    console.log("You get the bronze medal!");
    break;
  default :
  console.log("No medal awarded.");
 break;
}

// Envoling my functions 3 times
function getReminder(){
    console.log("Water the plants.");
  }
  function greetInSpanish(){
    console.log("Buenas tardes.");
  }

  function sayThanks(){
    console.log('Thank you for your purchase! We appreciate your business.');
  }
  sayThanks();
  sayThanks();
  sayThanks();

  // Function call with an argument

  function sayThanks(name) {
    console.log('Thank you for your purchase ' + 
    name + '! We appreciate your business.');
  }
  sayThanks("Cole");

  // Assigning values to parammeters

  function makeShoppingList(item1='milk',item2='bread',item3='eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }

  // Office monitors count codes.
  function monitorCount(rows,columns){
    return rows*columns;
    }
    const numOfMonitors=monitorCount(5,4);
    console.log(numOfMonitors);

    function monitorCount(rows, columns) {
        return rows * columns;
      }
      function costOfMonitors(rows,columns){
        return monitorCount(rows,columns) * 200;
      }
      const totalCost= costOfMonitors(5,4);
      console.log(totalCost);

      const plantNeedsWater = function(day){
        if(day === 'Wednesday'){
          return true;
        }else{
          return false;
        }
      }
      
      plantNeedsWater('Tuesday');
      console.log(plantNeedsWater('Tuesday'));
      // By arrow function 
      const plantNeedsWater =(day) => {
        if (day === 'Wednesday') {
          return true;
        } else {
          return false;
        }
      };

      // Refactoring the Arrow function body concise.
      const plantNeedsWater = day => day === 'Wednesday' ? true : false;

      const city="New York City";
function logCitySkyline(){
  let skyscraper="Empire State Building";
  return "The stars over the " + skyscraper + " in " + city;
}
console.log(logCitySkyline());

var satellite ="The Moon";
var galaxy = "The Milky Way";
var stars = "North Star";
function callMyNightSky(){
return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
}
console.log(callMyNightSky());
function logVisibleLightWaves(){
    const lightWaves = "Moonlight"; 
    console.log(lightWaves);
   }
   logVisibleLightWaves();

   //khjoihuiohioghiu

   const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = "Sirius";
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

// uhiiuhierhuih
const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    // Add if statement here:
    if(region === "The Arctic"){
      console.log(region);
      let lightWaves = "Northern Lights";
      console.log(lightWaves);
    }
    console.log(lightWaves);
  };
  
  logVisibleLightWaves();

  // Arrays

  const hobbies=['','',''];
console.log(hobbies);

// seconds

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem=famousSayings[0];
console.log(famousSayings[2]);
console.log(famousSayings[3]);
// the length of objectives array.
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);
// By push.
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push("Taste Sugar","Melt Water");
console.log(chores);


// By Pop

const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop("mop floor");
console.log(chores);

// More Arrays
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift("orange juice");
console.log(groceryList);
groceryList.unshift("popcorn");
console.log(groceryList);
console.log(groceryList.slice(1,4));
console.log(groceryList);
const pastaIndex=groceryList.indexOf("pasta");
console.log(pastaIndex);

// More and More
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);
function removeElement(newArr){
  newArr.pop();
}
removeElement(concept);
console.log(concept);
// assigning to access the element 6 inside numberClusters.

const numberClusters = [[1,2],[3,4],[5,6]];
const target = numberClusters[2][1];