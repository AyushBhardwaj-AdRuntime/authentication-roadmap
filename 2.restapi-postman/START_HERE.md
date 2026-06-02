# Start Here

This folder is for people who may have never used REST API tools before.

## What you are learning

- A REST API is a way for one app to ask another app for data or send data.
- Postman is a tool that lets you send those requests without writing code first.
- HTTP methods are the action words:
  - `GET` means read data
  - `POST` means create data
  - `PUT` means update data
  - `DELETE` means remove data

## What to do first

1. Read [README.md](README.md).
2. Open [POSTMAN_GUIDE.md](POSTMAN_GUIDE.md).
3. Start the server in `code/`.
4. Import `postman_collection.json` into Postman.
5. Run the requests in order.

## What the response means

When Postman shows a response, look at these parts first:

- `Status` tells you if the request worked.
- `Body` shows the JSON returned by the server.
- `Headers` show extra information.

## Very simple status codes

- `200` means the request worked.
- `201` means something was created.
- `400` means the request was written incorrectly.
- `404` means the item or route was not found.

## Tiny practice rule

Change only one thing at a time.

If something breaks, check:

1. The server is still running.
2. The URL is correct.
3. The method matches the request.
4. The JSON body is valid.

## Next

After this, use the beginner steps in [POSTMAN_GUIDE.md](POSTMAN_GUIDE.md) and then move to `practise/exercises.md`.