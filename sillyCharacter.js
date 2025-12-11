/* 
Silly Character Customizer - Lab Project

This script:
- Declares variables for character attributes
- Randomly generates a silly character
- Lets the user change the character's name and age
- Updates a funny description on the page
*/

// ----------------- Character Attributes -----------------

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

// ----------------- Random Data Lists -----------------

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

// ----------------- Random Character Generator -----------------

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

// ----------------- Age & Input Updates -----------------

// Functions to update character's age
function increaseAge() {
    age++;
    updateCharacterDescription();
}

function decreaseAge() {
    if (age > 0) {
        age--;
    }
    updateCharacterDescription();
}

// Update character from user inputs (name + age)
function updateCharacterFromInputs() {
    const nameInput = document.querySelector("#nameInput");
    const ageInput = document.querySelector("#ageInput");

    if (nameInput && nameInput.value.trim() !== "") {
        characterName = nameInput.value.trim();
    }

    if (ageInput && ageInput.value !== "") {
        const newAge = Number(ageInput.value);
        if (!Number.isNaN(newAge) && newAge > 0) {
            age = newAge;
        }
    }

    updateCharacterDescription();
}

// ----------------- Description Output -----------------

// Function to update the character's description after changing age
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

// ----------------- Event Listeners -----------------

// Add event listeners for buttons using querySelector
const generateButton = document.querySelector("#generateButton");
const increaseAgeButton = document.querySelector("#increaseAgeButton");
const decreaseAgeButton = document.querySelector("#decreaseAgeButton");
const updateCharacterButton = document.querySelector("#updateCharacterButton");

generateButton.addEventListener("click", generateRandomCharacter);
increaseAgeButton.addEventListener("click", increaseAge);
decreaseAgeButton.addEventListener("click", decreaseAge);
updateCharacterButton.addEventListener("click", updateCharacterFromInputs);

// Generate a character when the page first loads
generateRandomCharacter();
