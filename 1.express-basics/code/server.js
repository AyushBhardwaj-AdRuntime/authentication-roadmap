const express = require("express");

const app = express();
// The server listens on this port.
const PORT = process.env.PORT || 3000;

// When someone visits the home page, send a simple text message.
app.get("/", (req, res) => {
    res.send("Welcome to Express Basics");
});

if (require.main === module) {
    // Start the server only when this file is run directly.
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

// Allow tests and other files to use the app.
module.exports = app;