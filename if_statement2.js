// Write your code below
const vacationSpots=['Northern Province','Nyagatare District','Kayonza District'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);






// Write your code below
for(let kim=5; kim<=10; kim++){
    console.log(kim);
  }
  
  
  // The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3 ; counter >= 0; counter--){
    console.log(counter);
    }
    const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for(let i = 0; i < vacationSpots.length; i++){

  console.log("I would love to visit " +vacationSpots[i]);
}
// Create a nested loop that iterates through bobsFollowers as the array for the outer loop and tinasFollowers as the array for the inner loop. If the current element from the outer loop is the same as the current element from the inner loop, push that element into the mutualFollowers array.

// Write your code below
const bobsFollowers=['Lucie','Lucienne','Ange','Olivier'];
const tinasFollowers=['Lucie','Lucienne','Chris'];
const mutualFollowers=[];
for(let i=0; i < bobsFollowers.length; i++){
  for(let j=0; j < tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
 
// Create a while loop with a condition that checks if the currentCard does not have that value 'spade'. Math.floor(Math.random() * 4) will give us a random number from 0 to 3. We’ll use this number to index the cards array, and assign the value of currentCard to a random element from that array. If you notice the Run button spinning continuously or a “Lost connection to Codecademy” message in an exercise, you may have an infinite loop! If the stop condition for our loop is never met, we will create an infinite loop which stops our program from running anything else. To exit out of an infinite loop in an exercise, refresh the page — then fix the code for your loop.

const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
// Write your code below
while(currentCard !== 'spade'){
currentCard = cards[Math.floor(Math.random() * 4)];
console.log(currentCard);
}

// We have a sweet tooth, so we want to add at least one cup of sugar to the batter even if the value of cupsOfSugarNeeded is 0.Create a do...while loop which increments cupsAdded by one while cupsAdded is less than cupsOfSugarNeeded.In order to help us visualize the output on each iteration of the loop, add a console.log within the do...while block and log the value of cupsAdded.

// Write your code below
var cupsOfSugarNeeded = 4;
var cupsAdded = 0;
do{
  cupsAdded++;
  console.log(cupsAdded);
}
while(cupsAdded < cupsOfSugarNeeded);

// Log each element from rapperArray in a for loop with the iterator variable i.
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for(let i=0; i<rapperArray.length; i++){
  console.log(rapperArray[i]);
  if(rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don't know, now you know.");
