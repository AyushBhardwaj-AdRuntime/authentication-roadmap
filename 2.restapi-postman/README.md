# REST API + Postman

Short, practical guide to testing authentication flows using REST requests and Postman.

## Copy, paste, run

```bash
# open the module folder
cd 2.restapi-postman/code
# if this module has a server, install deps and start it
npm install
npm start
```

Open Postman and import the provided collection (if any) or use the curl examples below.

## What you will learn

- HTTP methods and status codes used in auth flows (GET, POST, 200, 401)
- How to send JSON requests and read JSON responses
- How to use headers for Authorization (Bearer tokens)
- Creating and running Postman requests and collections
- Writing simple Postman tests and using environments

## Quick examples (curl)

POST a login (replace URL):

```bash
curl -X POST http://localhost:3000/login \
	-H "Content-Type: application/json" \
	-d '{"username":"alice","password":"secret"}'
```

GET a protected resource with a bearer token:

```bash
curl http://localhost:3000/profile \
	-H "Authorization: Bearer <ACCESS_TOKEN>"
```

## How to use the `codes/` folder

1. Open `2.restapi-postman/code` — this is where runnable examples live.
2. If there is a `package.json`, run `npm install` then `npm start`.
3. Use the curl examples above or import the Postman collection (if present).
4. Use a Postman environment to store tokens and reuse them across requests.

## Postman tips (quick)

- Use `Collections` to group related requests (login, refresh, protected).
- Use `Tests` (under the request) to assert response status and save tokens:

```javascript
// example Postman test to save token
pm.test("status is 200", () => pm.response.to.have.status(200));
const json = pm.response.json();
pm.environment.set("accessToken", json.token);
```

## Practice

- Create a `POST /login` request that accepts JSON credentials and returns a token.
- In Postman, save the token to an environment variable and use it for `GET /profile`.
- Add a test that fails when status is not 200.

## Next chapter

`3.authentication-fundamentals` — core concepts and terminology.
