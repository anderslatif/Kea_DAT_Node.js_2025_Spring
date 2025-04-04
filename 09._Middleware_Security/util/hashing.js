import bcrypt from 'bcryptjs';


const saltRounds = 12;
const password = "Hunter123";
const hashedPassword = "$2b$13$itEyvDYgMA0tJWBvCTTQoeOVX0Eu3jBVxzVeVl6W1wFHnXXIoEAr2";

// /signup /forgotpassword
const passwordHash = await bcrypt.hash(password, saltRounds);

console.log(passwordHash);

// /login
const isSame = await bcrypt.compare(password, hashedPassword);

console.log(isSame);