# Express Basics Diagram

This diagram shows the smallest possible Express flow.

```mermaid
flowchart TD
    A[Browser visits /] --> B[Express receives the request]
    B --> C{Is the path /?}
    C -- Yes --> D[Send: Welcome to Express Basics]
    C -- No --> E[No matching route]
```

## Reading the flow

1. The browser makes a request.
2. Express receives it.
3. The app checks the path with a simple route match.
4. If the path is `/`, the server sends the welcome message.
