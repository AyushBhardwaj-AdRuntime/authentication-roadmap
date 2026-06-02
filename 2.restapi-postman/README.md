# REST API + Postman

Beginner-friendly guide to learning REST basics with Postman, plus a few advanced toppings for extra practice.

## Copy, paste, run

```bash
# open the module folder
cd 2.restapi-postman/code
# if this module has a server, install deps and start it
npm install
npm start
```

Open Postman and import the provided collection or use the curl examples below.

This module includes a tiny demo server under `code/`. Import `postman_collection.json` from this folder into Postman to run the example requests.

## What you will learn

- What REST is and how `GET`, `POST`, `PUT`, and `DELETE` work
- How to send JSON requests and read JSON responses
- How to use Postman to test an API step by step
- How to write simple Postman tests and save values in an environment
- A few advanced toppings like headers, query params, and response checks

## Quick examples (curl)

POST a new item (replace URL):

```bash
curl -X POST http://localhost:3000/items \
	-H "Content-Type: application/json" \
	-d '{"name":"My first item"}'
```

GET a single item:

```bash
curl http://localhost:3000/items/1
```

## How to use the `code/` folder

1. Open `2.restapi-postman/code` — this is where runnable examples live.
2. If there is a `package.json`, run `npm install` then `npm start`.
3. Use the curl examples above or import the Postman collection (if present).
4. Use a Postman environment to store tokens and reuse them across requests.

## Demo server (what's included)

`code/server.js` implements stateless demo endpoints that return simple messages.

- `GET /items` — returns a simple message for the list route
- `POST /items` — returns a 201 with a creation message
- `GET /items/:id` — returns a simple message for one item
- `PUT /items/:id` — returns an update message
- `DELETE /items/:id` — returns a delete message

This keeps the demo focused: learners can try each HTTP method and see the expected response without worrying about data storage.

After `npm start` the terminal will show the URL; use that URL in Postman or curl.

## Learn in order

1. Read the lesson and look at the routes in `code/server.js`.
2. Open Postman and send `GET /items` first.
3. Try `GET /items/1`, `POST /items`, `PUT /items/1`, and `DELETE /items/1`.
4. Move to the practice file in `practise/exercises.md`.

## Postman tips (quick)

- Use `Collections` to group related requests (list, create, update, delete).
- Use `Tests` (under the request) to assert response status and save tokens:

```javascript
// example Postman test to check a successful create request
pm.test("status is 200", () => pm.response.to.have.status(200));
const json = pm.response.json();
pm.expect(json.message).to.include("created");
```

## Practice

- Open `practise/exercises.md` and complete the beginner tasks first.
- After that, try the advanced topping tasks in the same file.
- Add your own request descriptions in Postman so you remember what each one does.

## Next chapter

`3.authentication-fundamentals` — core concepts and terminology.
