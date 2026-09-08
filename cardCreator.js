// Joseph Green 09/7/26
"use strict"; 


//PET CONSTRUCTOR FUNCTION
function Pet(name, type, age, owner, id, image);
    this.name = name;
    this.type = type;
    this.age = age;
    this.owner = owner || null;
    this.id = id;
    this.image = image;

//Create an owner object with two owners (owner1 and owner2) with two key/value properties-- name and phone. 

const owner1 = { name: "Sarah", phone: "555-0199" };
const owner2 = { name: "Alex", phone: "555-0142" };

//Then, add the following methods to your object:


Pet.prototype.getDescription = function() {
    return '${this.name} is a {this.type} and is {this.age} years old.';   
};

Pet.prototype.haveBirthday = function() {
    this.age += 1;
};

Pet.prototype.getOwnerName = function() {
    return this.owner?.name ?? "none";
};

Pet.prototype.getOwnerPhone = function() {
    return this.owner?.phone ?? "No phone on file";
};

Pet.prototype.getID = function() {
    return this.id;
};


// Create at least 3 pets using the new keyword. Two pets must have an owner, and one pet must not have an owner. 

const pet1 = new Pet("Doug", "dog", 4, owner1, "pet1", "dogs.webp");
const pet2 = new Pet("Phil", "parrot", 6, owner2, "pet2", "parrots.jpg");
const pet3 = new Pet("Candy", "cat", 3, owner, "pet3", "cat.webp");

const pets = [pet1, pet2, pet3];

//  Use Array.prototype.forEach() to log each pet's details to the browser console.
// Log Name, Type, Age, Owner Name, Owner Phone, and ID.
pets.forEach(function(Pet) {
    console.log("Name: " + pet.name);
    console.log("Type: " + pet.type);
    console.log("Age: " + pet.age);
    console.log("Owner: " + pet.getOwnerName);
    console.log("Owner Phone: " + getOwnerPhone)
    console.log("ID: " + pet.id);
    
});

//Call haveBirthday() on at least one pet and display the updated information to the console.

pet3.haveBirthday();
console.log(pet3.name +"'s Birthday is today!" + pet3.age);
//Display the current date and time using the Date object in a console.log() (just a simple Date object is sufficient)

console.log(new Date());

// DOM SELECTION

let currentIndex = 0;

// Select the DOM elements using document.querySelector().

const headingElement = document.querySelector("#galleryHeading");
const petImageElement = document.querySelector("#PetImage");
const petNameElement = document.querySelector("#petName");
const petDetailsElement = document.querySelector("#petDetails");
const petOwnerElement = document.querySelector("#petOwner");
const ownerPhoneElement = document.querySelector("#ownerPhone");
const petIDElement = document.querySelector("#petID");

const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");


// DISPLAY LOGIC & NAVIGATION

function showPet(index) {

    const pet = pets[index];

    // 1. Update gallery heading
    headingElement.textContent = `Pet ${index + 1} of ${pets.length}`;

    // 2. Update pet image
    if (petImageElement) {
        petImageElement.src = pet.image;
        petImageElement.alt = pet.name;
    }

    // 3. Update pet information
    petNameElement.textContent = pet.name;
    petDetailsElement.textContent = pet.getDescription();
    petOwnerElement.textContent = pet.getOwnerName();
    ownerPhoneElement.textContent = pet.getOwnerPhone();
    petIDElement.textContent = pet.getID();
}


// Complete button handlers

function handleNextClick() {
    currentIndex++;

    if (currentIndex >= pets.length) {
        currentIndex = 0;
    }

    showPet(currentIndex);
}


function handlePrevClick() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = pets.length - 1;
    }

    showPet(currentIndex);
}


// Event Listeners

nextButton.addEventListener("click", handleNextClick);
prevButton.addEventListener("click", handlePrevClick);


// Initial display on page load

showPet(currentIndex);