// STEP 1 - SELECT ELEMENTS

const playlist = document.querySelector("#playlistContainer");
const addButton = document.querySelector("#addBtn");
const titleInput = document.querySelector("#songTitle");
const artistInput = document.querySelector("#songArtist");


// STEP 2 - ADD A SONG

function addSong(title, artist) {

    // Create the article
    const songCard = document.createElement("article");
    songCard.classList.add("songCard");

    // Create the span
    const songInfo = document.createElement("span");
    songInfo.textContent = `${title} - ${artist}`;

    // Create the delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteBtn");

    // Add the span and button to the article
    songCard.appendChild(songInfo);
    songCard.appendChild(deleteButton);

    // Add the article to the playlist
    playlist.appendChild(songCard);
}


// STEP 3 - ADD BUTTON

function handleAddSong() {

    // Get the values from the inputs
    const title = titleInput.value;
    const artist = artistInput.value;

    // Only add the song if both inputs have a value
    if (title && artist) {
        addSong(title, artist);

        // Clear the inputs
        titleInput.value = "";
        artistInput.value = "";
    }
}

addButton.addEventListener("click", handleAddSong);


// STEP 4 - EVENT DELEGATION FOR DELETE BUTTONS

function handlePlaylistClick(event) {

    // Show that the click bubbled up to the playlist
    console.log("Click bubbled up to playlist:", event.target);

    // Check if the clicked element is a delete button
    if (event.target.classList.contains("deleteBtn")) {

        // Remove the entire song card
        event.target.parentElement.remove();
    }
}

playlist.addEventListener("click", handlePlaylistClick);