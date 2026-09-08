// Joseph Green 09/07/26

"use strict";


// PET CONSTRUCTOR FUNCTION

function Pet(name, type, age, owner, petID, image) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.owner = owner || null;
    this.petID = petID;
    this.image = image;
}


// OWNER OBJECTS

const owner1 = {name: "Sarah", phone: "555-0199"};

const owner2 = {name: "Alex",phone: "555-0142"};


// PET PROTOTYPE METHODS

Pet.prototype.getDescription = function() {
    return `${this.name} is a ${this.type} and is ${this.age} years old.`;
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
    return this.petID;
};


// CREATE PET OBJECTS

const pet1 = new Pet("Doug","dog", 4, owner1, "pet1","dogs.webp");

const pet2 = new Pet("Phil","parrot", 6, owner2, "pet2", "parrots.jpg");

const pet3 = new Pet("Candy", "cat", 3, null, "pet3", "cat.webp");


// PET ARRAY

const pets = [pet1, pet2, pet3];


// USE FOREACH TO DISPLAY PET INFORMATION IN CONSOLE

pets.forEach(function(pet) {
    console.log("Name: " + pet.name);
    console.log("Type: " + pet.type);
    console.log("Age: " + pet.age);
    console.log("Owner Name: " + pet.getOwnerName());
    console.log("Owner Phone: " + pet.getOwnerPhone());
    console.log("ID: " + pet.getID());
});


// CALL haveBirthday() ON AT LEAST ONE PET

pet3.haveBirthday();

console.log(pet3.name + "'s birthday is today!");
console.log(pet3.getDescription());


// DISPLAY CURRENT DATE AND TIME

console.log(new Date());


// DOM SELECTION

let currentIndex = 0;

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

    // Update gallery heading
    headingElement.textContent = `Pet ${index + 1} of ${pets.length}`;

    // Update pet image
    if (petImageElement) {
        petImageElement.src = pet.image;
        petImageElement.alt = pet.name;
    }

    // Update pet information
    petNameElement.textContent = pet.name;
    petDetailsElement.textContent = pet.getDescription();
    petOwnerElement.textContent = pet.getOwnerName();
    ownerPhoneElement.textContent = pet.getOwnerPhone();
    petIDElement.textContent = pet.getID();
}


// NEXT BUTTON

function handleNextClick() {

    currentIndex++;

    if (currentIndex >= pets.length) {
        currentIndex = 0;
    }

    showPet(currentIndex);
}


// PREVIOUS BUTTON

function handlePrevClick() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = pets.length - 1;
    }

    showPet(currentIndex);
}


// EVENT LISTENERS

nextButton.addEventListener("click", handleNextClick);
prevButton.addEventListener("click", handlePrevClick);


// INITIAL DISPLAY

showPet(currentIndex);