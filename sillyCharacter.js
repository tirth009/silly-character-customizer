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
function generateRandomCharacter() {
    characterName = getRandomItem(sillyNames);
    favoriteFood = getRandomItem(foods);

    // Random age between 5 and 80
    age = Math.floor(Math.random() * 76) + 5;

    // Random boolean (superhero or not)
    isSuperhero = Math.random() < 0.5;

    // Choose 2–3 random powers
    specialPowers = [];
    const howManyPowers = Math.floor(Math.random() * 2) + 2; // 2 or 3
    while (specialPowers.length < howManyPowers) {
        const power = getRandomItem(powersList);
        if (!specialPowers.includes(power)) {
            specialPowers.push(power);
        }
    }

    updateCharacterDescription();
}



// Functions to update character's age
function updateCharacterDescription() {
    const descriptionElement = document.querySelector("#characterDescription");

    const heroText = isSuperhero
        ? "a mighty superhero"
        : "a totally ordinary (but very silly) human";

    const powersText =
        specialPowers.length > 0
            ? `Their special powers include: ${specialPowers.join(", ")}.`
            : "They don't seem to have any special powers... yet.";

    const description = `Meet ${characterName}, a ${age}-year-old ${heroText} who loves ${favoriteFood}! ${powersText}`;

    descriptionElement.textContent = description;
}





// Function to update the character's description after changing age


// Add event listeners for buttons using querySelector

// Generate a character when the page first loads
generateRandomCharacter();
