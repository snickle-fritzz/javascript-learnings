/* Ash Adventures has three different “adventures” to choose from. First, the customer is prompted for a number at the terminal, which is passed to a function called adventureSelector. This function should create a boarding message function based on the number the user gives, and then return that function to be stored in a variable so that it can be used later.

The devs at Ash Adventures have asked you to build out this function, and to only return function expressions with no extra variables created. The different messages that should be alerted in those returned functions are as follows:

If the user selects 1:

You've selected the Vines of Doom!
Hope you have a swingin' time.
If the user selects 2:

Looks like you want the Lake of Despair!
Watch out for crocs. And I ain't talkin' about shoes.
If the user selects 3:

The Caves of Catastrophe, really?
Alright, well....nice knowing you.
Assume the user’s choice has already been stored as 1, 2, or 3 (and only these), and is passed in as parameter userChoice. Make sure that you return all message functions as expressions, instead of stored in variables.
*/

function adventureSelector ( userChoice ){
  if(userChoice == 1) {
    return function () {
      alert("You've selected the Vines of Doom!\n" + "Hope you have a swingin' time.");
    };
    
  } else if (userChoice == 2) {
    return function () {
      alert("Looks like you want the Lake of Despair!\n" + "Watch out for crocs. And I ain't talkin' about shoes.");
    };
    
  } else {
    return function () {
      alert("The Caves of Catastrophe, really?\n" + "Alright, well....nice knowing you.");
      
    };
    
  }
}


// Write one line of code that calls adventureSelector when the user selects choice 3, and that automatically invokes the function that gets returned. 

adventureSelector(3)();


// Puzzlers
// “What is obtained when the result of passing 9 into function 4 is then passed into the function 
// whose array index matches the result of passing 3 into function 2?”


var puzzlers = [
  function ( a ) { return 8*a - 10; }, 
  function ( a ) { return (a-3) * (a-3) * (a-3); }, 
  function ( a ) { return a * a + 4; },
  function ( a ) { return a % 5; }
];
alert( puzzlers[ puzzlers[1](3) ]( puzzlers[3](9) ) );  // need to figure out this syntax

// Okay, check this out. Notice that puzzlers[index] calls forth a specific function expression, and puzzlers[index](parameter) will pass the parameter directly into the function expression you’ve accessed. This, in turn, produces a value that can be used anywhere, either as a parameter itself, or even as another array index, both of which we’ve done here.


