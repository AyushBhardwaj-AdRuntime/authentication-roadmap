# Express Basics

Your first Express chapter. Small, simple, and beginner-friendly.

## What you will learn

- What Express is
- How to start a server
- How to add a route
- How to send a response

## Start here

1. Open `code/`
2. Run `npm install`
3. Run `npm test`
4. Run `npm start`

## What this chapter includes

- `code/server.js` - tiny Express app
- `code/test/server.test.js` - one basic test
- `diagrams/flow.svg` - simple request flow
- `practise/exercises.md` - two small exercises

## Why Express?

Express helps you build APIs and web apps with less code.

## Tiny app preview

```javascript
app.get("/", (req, res) => {
    res.send("Welcome to Express Basics");
});
```

## Practice

- Add a `/greet` route
- Change the home message

## Next chapter

REST API and Postman