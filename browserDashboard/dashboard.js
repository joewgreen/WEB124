// Browser Information
console.log("Page location is: " + window.location.href);
console.log("Language is: " + navigator.language);
console.log("Navigator online? " + navigator.onLine);
console.log("Window screen height: " + window.screen.height);
console.log("Window screen width: " + window.screen.width);

//Window Information
console.log("Window inner width: " + window.innerWidth);
console.log("Window inner height: " + window.innerHeight);

// Select the form
const form = document.querySelector("#siteForm");
console.log(form);

// Focus & Blur
const userName = form.elements.userName;

userName.onfocus = function() {
    console.log("The name field was selected");
};

userName.onblur = function() {
    console.log("The name field was left");
};

// Form Submission
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nameInput = form.elements.userName;
    const siteInput = form.elements.favoriteSite;

    //Display Form Values
    const result = document.querySelector("#result");

    result.textContent = "Name: " + nameInput.value +
                         " | Favorite website: " + siteInput.value;

    //URL Object
    const url = new URL(siteInput.value);

    console.log(url.hostname);
    console.log(url.protocol);
    console.log(url.pathname);

    //Local Storage
    localStorage.setItem("Name", nameInput.value);

    const storedName = localStorage.getItem("Name");
    console.log(storedName);

    // Session Storage
    sessionStorage.setItem("Site", siteInput.value);

    const storedSite = sessionStorage.getItem("Site");
    console.log(storedSite);
});