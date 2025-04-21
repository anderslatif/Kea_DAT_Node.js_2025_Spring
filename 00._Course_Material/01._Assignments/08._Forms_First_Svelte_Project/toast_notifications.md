# Make Toast Notifications in your web framework of choice. 

Hand-in: No Teams hand in required since this will be part of mandatory II and thus part of the exam project.

Alerts are banned for the exam project. Set up toast notifications instead. 

You could use one of these libraries:

https://github.com/CodeSeven/toastr

https://github.com/kbrgl/svelte-french-toast

---

# Setting up Toastr (how to include the CSS file)

1. Install Toastr via npm:

```bash
$ npm install toastr
```

2. You need to add the CSS file manually. You can either do:

* Find the minified CSS file in [the repo](https://github.com/CodeSeven/toastr). Paste it into a CSS file in your project and import it. 

* Or you can find it in the `node_modules` folder: `toastr/build/toastr.min.css`. 

3. In order to import it, you can either:

* Point to the CSS file in a `<link>` tag in your `index.html` file:

* Import it in your main JavaScript file (e.g., `main.js` for Svelte):

```javascript
import 'toastr/build/toastr.min.css';
```

4. If you are in a Web Framework like Svelte, then write the following in your `App.svelte` file:

```javascript
import toastr from 'toastr';
toastr.info('Notice');
toastr.warning('Warning');
```
