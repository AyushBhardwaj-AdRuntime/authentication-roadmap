# Diagram

This module uses one simple flow to explain authentication.

```mermaid
flowchart TD
    A[User enters username and password] --> B{Are both fields empty?}
    B -- Yes --> C[Show message: enter username and password]
    B -- No --> D{Do the values match the stored example?}
    D -- Yes --> E[Login successful]
    D -- No --> F[Login failed]
```

## Reading the flow

1. Start with the login form.
2. Check whether the user typed anything.
3. Compare the values with the stored example.
4. Show either success or failure.