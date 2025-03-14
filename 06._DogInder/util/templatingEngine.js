import fs from "fs";

export function readPage(path) {
    return fs.readFileSync(path).toString();
}

const header = readPage('./public/components/header/header.html')
const footer = readPage('./public/components/footer/footer.html');

export function constructPage(pageContent, options={}) {
    return header
            .replace('$NAV_TITLE$', options.title || 'DogInder')
            .replace('$CSS_LINKS$', options.cssLinks || '')
        + pageContent 
        + footer;
}


