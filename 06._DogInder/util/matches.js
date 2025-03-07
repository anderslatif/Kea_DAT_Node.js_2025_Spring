
export function getMatches() {
   fetch("https://dog.ceo/api/breeds/image/random")
   .then((response) => response.json())
   .then((result) => console.log(result.message));
}

function getMatch() {

}


