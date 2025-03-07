let dogs = [];

const dogMatchesNameH1 = document.getElementById("dog-matches-name");
const dogMatchesImageContainerDiv = document.getElementById("dog-matches-image-container");

function getMatches() {
    fetch("/api/matches")
    .then((response) => response.json())
    .then((result) => {
        dogs = result.data;
        createMatchImage(dogs.pop());
    });
}

getMatches();

function createMatchImage(dog) {
    dogMatchesNameH1.textContent = dog.name;

    const imageTag = document.createElement("img");
    imageTag.src = dog.image;
    imageTag.id = "dog-matches-image";

    dogMatchesImageContainerDiv.innerHTML = "";
    dogMatchesImageContainerDiv.appendChild(imageTag);
}