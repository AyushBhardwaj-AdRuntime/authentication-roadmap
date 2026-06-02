# REST API Practice

Use this after you read the lesson in `README.md` and try the demo server in `code/server.js`.

## Practice setup

1. Open `2.restapi-postman/code`.
2. Run the server with `npm install` and `npm start`.
3. Open Postman and use `http://localhost:3000` as the base URL.

## Beginner path

Start with these in order:

1. Send `GET /items`.
2. Send `GET /items/1`.
3. Send `POST /items` with this body:

```json
{
  "name": "Sample item"
}
```

4. Send `PUT /items/1` with this body:

```json
{
  "name": "Updated item"
}
```

5. Send `DELETE /items/1`.

What to notice:

- `GET` reads data
- `POST` creates data
- `PUT` changes existing data
- `DELETE` removes data
- `201` usually means a new resource was created
- `404` usually means the item was not found

## Beginner checks

- Does `GET /items` return a JSON message?
- Does `POST /items` return status `201`?
- Does `PUT /items/1` show an update message?
- Does `DELETE /items/1` show a delete message?

## Advanced toppings

Try these after the beginner path:

1. Change the id in the URL to `999` and see the response.
2. Send `POST /items` without a `name` field.
3. Add a `Content-Type: application/json` header manually.
4. Add a Postman test that checks `pm.response.to.have.status(201)`.
5. Add a Postman test that checks the response body contains the word `created`.
6. Duplicate one request in Postman and rename it so you can keep a practice copy.

## Reflection

After finishing, answer these questions:

- Which method did you use to read data?
- Which method did you use to create data?
- What happened when the id did not exist?

## Next step

When this feels comfortable, move on to `3.authentication-fundamentals`.
