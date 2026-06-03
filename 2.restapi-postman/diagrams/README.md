# REST API + Postman Diagram

This diagram shows the basic request flow for the REST API chapter.

```mermaid
flowchart TD
    A[Create a request in Postman or curl] --> B[Send the HTTP request]
    B --> C[API receives the request]
    C --> D{Which method is used?}
    D -- GET --> E[Read data and return JSON]
    D -- POST --> F[Create data and return a response]
    D -- PUT --> G[Update data and return a response]
    D -- DELETE --> H[Delete data and return a response]
```

## Reading the flow

1. You build a request in Postman or with `curl`.
2. The request is sent to the API.
3. The server checks the HTTP method.
4. The API sends back the matching response.
