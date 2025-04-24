# Make Toast Notifications in your web framework of choice. 

Hand-in: No Teams hand in required since this will be part of mandatory II and thus part of the exam project.

Alerts are banned for the exam project. Set up toast notifications instead. 

You could use one of these libraries:

https://github.com/CodeSeven/toastr

https://github.com/kbrgl/svelte-french-toast

---

# [Option 1] Setting up Toastr (Plain HTML)

This option shows how to set up Toastr in a plain HTML project. This option avoids relying on the CDN by adding the files manually.

1. **Get Toastr**: 

Find the Javascript CDN link in [the repo](https://github.com/CodeSeven/toastr). Paste the content into a `toastr.js` file and link to it in your `index.html`. 

2. **Add the CSS file** manually:

Find the minified CSS file in [the repo](https://github.com/CodeSeven/toastr). Paste it into a CSS file in your project and import it. 

3. **Import the CSS file** in a `<link>` tag in your `index.html` file. 

4. **Use it**. Since the CDN link loads the library into the global scope, you can use it directly in your JavaScript file. 

```javascript
toastr.info('Notice');
toastr.warning('Warning');
```

---

# [Option 2] Setting up Toastr (in Svelte with Vite)

This option shows how to set up Toastr in a project that comes with a bundler like Vite.

1. **Install Toastr** via npm:

```bash
$ npm install toastr
```

2. **Find the CSS file** in the `node_modules` folder: `toastr/build/toastr.min.css`.

3. **Import the CSS file** in your main JavaScript file (`main.js` in Svelte):

```javascript
import 'toastr/build/toastr.min.css';
```

4. **Use it**. you need to import the library in the component. Try this in your `App.svelte` file:

```javascript
import toastr from 'toastr';
toastr.info('Notice');
toastr.warning('Warning');
```
