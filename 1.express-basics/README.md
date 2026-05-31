# Express Basics

This is the first chapter. The goal is simple: understand one tiny Express server.

## What you will learn

- What Express is
- How to run a server
- How one route works
- Where to see the result in the browser

## How to use the `code/` folder

1. Open [code/server.js](code/server.js)
2. Install packages in [code/package.json](code/package.json)
3. Run `npm install`
4. Run `npm test`
5. Run `npm start`
6. Open `http://localhost:3000` in your browser

You will see: `Welcome to Express Basics`

## What is inside `server.js`

```javascript
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Welcome to Express Basics");
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

module.exports = app;
```

## Word by word

- `const` means the value will not change
- `express` is the package we use
- `require("express")` brings Express into the file
- `app` is our Express app
- `PORT` is the number the server uses
- `app.get("/")` creates a route for the home page
- `req` is the request from the browser
- `res` is the response we send back
- `res.send()` sends text to the browser
- `if` checks a condition
- `require.main` tells us which file started the app
- `module` is the current file
- `module.exports` lets other files use this app
- `app.listen()` starts the server

## Practice

- Change the home message in `server.js`
- Add one new route called `/greet`

## Result

After `npm start`, open `http://localhost:3000`.

## Next chapter

REST API and Postman