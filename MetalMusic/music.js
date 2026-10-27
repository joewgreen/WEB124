// Part 2: Array and Object

// Array: my favorite bands (in order)
const favoriteBands = [
    "Neurosis",
    "ISIS",
    "Converge",
    "Knocked Loose",
    "Metallica",
    "The Dillinger Escape Plan"
];

// Object: each band name maps to its subgenre and year founded
const bandInfo = {
    "Neurosis": { subgenre: "Post-metal / Sludge", founded: 1985 },
    "ISIS": { subgenre: "Post-metal", founded: 1997 },
    "Converge": { subgenre: "Metalcore", founded: 1990 },
    "Knocked Loose": { subgenre: "Hardcore / Metalcore", founded: 2013 },
    "Metallica": { subgenre: "Thrash metal", founded: 1981 },
    "The Dillinger Escape Plan": { subgenre: "Mathcore", founded: 1997 }
};

// Part 3: DOM Selection and Modification

// getElementById(): the list of band buttons
const bandList = document.getElementById("bandList");

// querySelector(): the info panel and the hint text
const infoPanel = document.querySelector(".band-info-panel");
const bandHint = document.querySelector(".bandHint");

const defaultHint = "Click a band name to learn more about them.";
const defaultPanel = '<p class="info-placeholder">Band info will show up here.</p>';

const bandButtons = bandList.querySelectorAll(".band-name");

bandButtons.forEach(function (button) {
    // Event: clicking a band name updates the info panel
    button.addEventListener("click", function () {
        const band = button.textContent.trim();
        const alreadySelected = button.classList.contains("selected");

        // Clear the highlight from every band
        bandButtons.forEach(function (b) {
            b.classList.remove("selected");
        });

        // Clicking the same band again resets the panel
        if (alreadySelected) {
            infoPanel.innerHTML = defaultPanel;
            bandHint.textContent = defaultHint;
            return;
        }

        const info = bandInfo[band];                         // object lookup
        const rank = favoriteBands.indexOf(band) + 1;        // array lookup

        button.classList.add("selected");
        infoPanel.innerHTML =
            "<h3>" + band + "</h3>" +
            "<p><strong>Subgenre:</strong> " + info.subgenre + "</p>" +
            "<p><strong>Founded:</strong> " + info.founded + "</p>" +
            "<p><strong>Favorite:</strong> #" + rank + " of " + favoriteBands.length + "</p>";
        bandHint.textContent = "Showing info for " + band + ".";
    });
});


// Band submission form

// getElementById(): the form and the thank-you message
const bandForm = document.getElementById("bandForm");
const formMessage = document.getElementById("formMessage");
const submittedInfo = document.getElementById("submittedInfo");

// Event: submitting the form shows the submitted info on the page
bandForm.addEventListener("submit", function (event) {
    event.preventDefault();   // stop the page from reloading

    // Access the form fields and retrieve their values
    const submittedBand = document.getElementById("bandInput").value.trim();
    const submittedEmail = document.getElementById("emailInput").value.trim();

    // Display the submitted information on the page
    formMessage.textContent = "Thanks! I'll check them out.";
    submittedInfo.textContent =
        "Band: " + submittedBand + " | Email: " + submittedEmail;

    // Part 8: Storage - save the submission in localStorage
    const submission = { band: submittedBand, email: submittedEmail };
    localStorage.setItem("lastSubmission", JSON.stringify(submission));

    bandForm.reset();         // clear the fields
});

// Part 8: Storage - retrieve the saved submission when the page loads
const savedSubmission = localStorage.getItem("lastSubmission");

if (savedSubmission !== null) {
    const saved = JSON.parse(savedSubmission);

    formMessage.textContent = "Welcome back! Your last submission:";
    submittedInfo.textContent =
        "Band: " + saved.band + " | Email: " + saved.email;
}