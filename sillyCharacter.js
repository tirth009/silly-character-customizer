/* 
Project: "Silly Character Customizer"
Objective:
You’ll create a small interactive webpage that generates a random, 
funny character with attributes like name, age, favorite food, and special powers. 
The user can also customize some aspects like updating the character's name or age.

Project Breakdown:
Declare, Initialize, and Update Variables:

You’ll create variables to store different character attributes 
(name, age, favorite food, etc.).
Users will have the option to update some of these variables, like 
changing the character’s name or age.

Use different data types for each attribute:
characterName (string)
Age (number)
Is the character a superhero? (boolean)
Special powers (array)
Favorite food (string)
// string
let characterName = "Captain Waffles";

// number
let age = 0;

// boolean
let isSuperhero = false;

// array
let specialPowers = [];

// string
let favoriteFood = "pizza";
// Options to randomize from
const sillyNames = [
    "Captain Waffles",
    "Sir Noodleface",
    "Princess Pickles",
    "Doctor Donut",
    "Lady Bubblegum",
    "Professor Pudding"
];

const foods = [
    "pizza",
    "spicy noodles",
    "chocolate-covered broccoli",
    "marshmallow tacos",
    "rainbow pancakes",
    "extra-cheesy nachos"
];

const powersList = [
    "can sneeze glitter",
    "can talk to squirrels",
    "can fly faster than light",
    "can turn invisible when nobody is looking",
    "can summon endless snacks",
    "can time-travel but only to lunchtime"
];

// Helper: get a random item from an array
function getRandomItem(list) {
    const index = Math.floor(Math.random() * list.length);
    return list[index];
}


Conduct Basic Math Operations:

You can randomly generate the character's age using math operations.
You could also include a small feature where the character's age increases 
or decreases when a button is clicked.
Create and Manipulate Strings:

Use string manipulation to generate a funny description of the character 
based on the data. You can concatenate strings or use template literals to 
display the character's attributes in a creative and humorous way.

*/

// Declare and initialize variables



// Function to generate a random character description


// Functions to update character's age




// Function to update the character's description after changing age


// Add event listeners for buttons using querySelector

