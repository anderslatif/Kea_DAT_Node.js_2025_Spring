# Svelte Dotenv

---

## How to define environment variables with Vite

1. Install dotenv:

```bash
$ npm install dotenv
```

2. Create a `.env` file in the root of your project and create a variable:

```text
VITE_BASE_URL=http://localhost:8080
```

All environment variables **must** start with `VITE_`.

3. You can now access the variables through `import.meta.env`:

```javascript
console.log(import.meta.env.VITE_BASE_URL);
```

No need for running dot env config anywhere.

**Remember** Defining `.env` is **ABSOLUTY NOT** for sensitive data. Clients will be able to access the data.

---

## Is `.env` even the right choice?

`.env` should be added to `.gitignore` and should never be pushed. 

Since it also isn't for sensitive data, a strong argument exists for defining global variables in a store as it will be pushed with the code. 

Maybe a mix of `.env` and stores can achieve that it's possible for developers to overwite their own development values without having to change the values in the stores every time. Example:

```javascript
export const BASE_URL = readable(import.meta.env.VITE_BASE_URL || 'http://myproductionwebsite.com');
```

That way, you allow developers to define their own port but you don't have to deal with `.env` files in production.  You could also flip it.

Of course, it depends on the context, the values you need to define and your overall setup. 

