
export async function getMatches(numberOfMatches = 2) {
    const promises = [];
    for (let i = 0; i < numberOfMatches; i++) {
        const promise = fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json());
        promises.push(promise);
    }
    const results = await Promise.all(promises);
    const matches = results.map((result) => ({ image: result.message, name: "Fido" }))
    return matches;
}



