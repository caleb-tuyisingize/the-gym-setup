
 let x=30;
  console.log("The value of X is:", x);
  console.log(Math.max(2,20));
  console.log(Math.min(300,100)+24);
/* t number=Number(prompt("Enter the number to view its squareroot"));
  
  console.log("The aquare of: "+ number +" Is: "+ number*number); */
  const myArray=[1,3,'Kimenyi','Alexandre',2,5];
  var forNumbers=myArray.filter(item => typeof item === "number");
  console.log("For the solt of numbers we have ["+forNumbers+"]");
    var forStrings=myArray.filter(item => typeof item === "string");
    console.log("For the solt of Names we have ["+forStrings+"]");

  
    var myUmubare=Number(prompt("Pick a number for square root"));
    if(!Number.isNaN(myUmubare)){
      console.log("The number you picked is:"+myUmubare);
      
    }else{
      console.log("For sure you didn't input a number");
    }