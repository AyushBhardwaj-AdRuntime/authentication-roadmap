# Express Basics

This chapter is a very small introduction to Express.js.

## What you will learn

- What Express is
- How to create a simple server
- How to show a response in the browser

## Why Express?

Express helps you build web apps and APIs with less code.

## Quick setup

```bash
npm init -y
npm install express
node index.js
```

## Simple example


const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to Express Basics");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


## Practice

- Make a `/greet` route
- Change the response message
- Run the server and open `http://localhost:3000`

## Next chapter

REST API and Postman    