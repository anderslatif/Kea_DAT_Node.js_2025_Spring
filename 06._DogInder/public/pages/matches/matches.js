let dogs = [];

const dogMatchesNameH1 = document.getElementById("dog-matches-name");
const dogMatchesBioh3 = document.getElementById("dog-matches-bio");
const dogMatchesCityH4 = document.getElementById("dog-matches-city");
const dogMatchesStreetAddressH4 = document.getElementById("dog-matches-street-address");
const dogMatchesImageContainerDiv = document.getElementById("dog-matches-image-container");


function getMatches() {
    fetch("/api/matches")
    .then((response) => response.json())
    .then((result) => {
        dogs = result.data;
        createMatchProfile(dogs.pop());
    });
}

getMatches();

function createMatchProfile(dog) {
    dogMatchesNameH1.textContent = dog.name;
    dogMatchesBioh3.textContent = dog.bio;
    dogMatchesCityH4.textContent = dog.city;
    dogMatchesStreetAddressH4.textContent = dog.streetAddress;

    const imageTag = document.createElement("img");
    imageTag.src = dog.image;
    imageTag.alt = "dog match";
    imageTag.id = "dog-matches-image";

    dogMatchesImageContainerDiv.innerHTML = "";
    dogMatchesImageContainerDiv.appendChild(imageTag);

    setupHammerPanEvents(imageTag);
}

function setupHammerPanEvents(dogImageTag) {
    const hammertime = new Hammer(dogImageTag);

    hammertime.on('pan', (event) => {
        // Calculate the new position based on the pan movement
        const deltaX = event.deltaX;

        // Apply the transformation to the image
        dogImageTag.style.transform = `translateX(${deltaX}px)`;
    });

    hammertime.on('panend', (event) => {
        if (event.deltaX > 0) {
            console.log("Ended dragging to the right");
            // todo: Handle end of right drag here
        } else {
            console.log("Ended dragging to the left");
            // todo: Handle end of left drag here
        }
        if (dogs.length > 0) {
            createMatchProfile(dogs.pop());
        } else {
            getMatches();
        }
    });
}