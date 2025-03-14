import fs from "fs";

export function readPage(path) {
    return fs.readFileSync(path).toString();
}

const header = readPage('./public/components/header/header.html')
const footer = readPage('./public/components/footer/footer.html');

export function constructPage(pageContent) {
    return header + pageContent + footer;
}
