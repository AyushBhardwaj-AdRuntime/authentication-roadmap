# How to Use Postman in This Folder

This guide shows how to use Postman with the REST demo in `2.restapi-postman`.

If you have never used Postman before, read [START_HERE.md](START_HERE.md) first.

## 1. Start the server

Open a terminal in `2.restapi-postman/code` and run:

```bash
npm install
npm start
```

The server should run at `http://localhost:3000`.

## 2. Import the collection

In Postman:

1. Click `Import`.
2. Choose `2.restapi-postman/postman_collection.json`.
3. Open the imported collection.

The requests are already arranged in a beginner-friendly order:

1. `List items`
2. `Create item`
3. `Get item`
4. `Update item`
5. `Delete item`

## 3. Run the requests in order

Start with `GET /items`.

What to notice:

- The response is JSON.
- The status code is `200`.
- You can see how the server responds before making any changes.

Then try the rest:

- `POST /items` to create data
- `GET /items/1` to read one item
- `PUT /items/1` to update data
- `DELETE /items/1` to remove data

## 4. Learn the main Postman sections

When you open a request, focus on these parts:

- `Method` — GET, POST, PUT, or DELETE
- `URL` — the address of the server
- `Params` — optional query parameters
- `Headers` — extra information like `Content-Type`
- `Body` — the JSON you send with POST or PUT
- `Tests` — checks that confirm the response is correct

## 5. Try a request by hand

Create a new request and send `POST http://localhost:3000/items` with this body:

```json
{
  "name": "My Postman item"
}
```

Set the body type to `raw` and the format to `JSON`.

If you are using Postman manually, make sure the request has this header:

```text
Content-Type: application/json
```

## 6. Add a simple test

Open the `Tests` tab and add this:

```javascript
pm.test('status is 201', function () {
  pm.response.to.have.status(201);
});

pm.test('response mentions created', function () {
  pm.expect(pm.response.json().message).to.include('created');
});
```

This helps you confirm that the API did what you expected.

## 7. Use an environment when needed

If you want to avoid typing the same base URL again and again, create an environment variable.

Example:

```text
baseUrl = http://localhost:3000
```

Then use it in requests like this:

```text
{{baseUrl}}/items
```

## 8. Usual beginner workflow

This is the simple routine to follow in most folders:

1. Read the lesson.
2. Start the server.
3. Import the collection.
4. Run the requests one by one.
5. Change one field at a time and observe the response.
6. Add a small test after each successful request.

## 9. Small troubleshooting tips

- If the request fails, confirm the server is still running.
- If you get `404`, check the URL path and the item id.
- If you get `400`, check the JSON body and headers.
- If Postman cannot parse the response, make sure the server returned JSON.

## 10. What to do after practice

After you are comfortable here, move on to `3.authentication-fundamentals`.