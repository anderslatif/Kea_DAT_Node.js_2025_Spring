import { readPage, constructPage } from "./templatingEngine.js";

const frontpage = readPage('./public/pages/frontpage/frontpage.html');
export const frontpagePage = constructPage(frontpage);

const matches = readPage('./public/pages/matches/matches.html');
export const matchesPage = constructPage(matches, 
    {
        title: 'DogInder | Matches', 
        cssLinks: '<link rel="stylesheet" href="/pages/matches/matches.css">'
    }
);

