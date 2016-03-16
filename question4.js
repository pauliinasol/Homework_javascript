// The Vegan Test
// On the menu tonight: Steak, fruit salad, tofurkey, pork chops.
// prompts the user for their menu choice and assign it to a variable.
// If a vegan can eat it, return "This cuisine is vegan friendly."
// Otherwise, return "Vegans beware!"
// For the sake of this exercise. Tofurkey is definitely vegan friendly.
// Hint: Two identical strings are considered to be equal to each other.



  var veganOptions = ['fruit salad','tofurkey'];
  var meatOptions = ['steak', 'pork chops']
  var choice;

  while (choice != veganOptions && meatOptions) {
    console.log('Time to choose if you want' + veganOptions + 'or' + meatOptions);
    guess = prompt("What would you like to have for dinner?");

  }

  if (counter == veganOptions) {
  console.log("This cuisine is vegan friendly!");

  }

  if (counter == meatOptions) {
  console.log("Vegans beware!");

  }

  else {
  console.log("You need to choose from the menu!");
  }


// OR

var options;
var menu = ['fruit salad', 'tofurkey', 'steak', 'pork chops']
var veganOption1 = 'fruit salad'
var veganOption2 = 'tofurkey'
var meatOption1 = 'steak'
var meatOption2 = 'pork chops'

while (options != menu) {
  options = prompt("On the menu tonight: Steak, fruit salad, tofurkey and pork chops");
}
  if (options == veganOption1) {
    console.log('This cuisine is vegan friendly')
  }
  if (options == meatOption1) {
    console.log('Vegans beware!')
  }
  if (options == veganOption2) {
    console.log('This cuisine is vegan friendly')
  }
  if (options == meatOption2) {
    console.log('Vegans beware!')
  }

 // while (game != secretNumber) {
//   game = prompt("Guess a number");
// }

// console.log('Correct!');
