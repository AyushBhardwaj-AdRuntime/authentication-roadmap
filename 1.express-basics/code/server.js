const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Welcome to Express Basics");
});

app.get("/greet", (req, res) => {
    res.send("Hello from Express Basics");
});

app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

module.exports = app;