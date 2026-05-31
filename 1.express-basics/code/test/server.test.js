const test = require("node:test");
const assert = require("node:assert");
const http = require("node:http");
const app = require("../server");

function request(path) {
  return new Promise((resolve, reject) => {
    const server = app.listen(0, () => {
      const { port } = server.address();
      const req = http.request(
        {
          hostname: "127.0.0.1",
          port,
          path,
          method: "GET"
        },
        (res) => {
          let body = "";
          res.setEncoding("utf8");
          res.on("data", (chunk) => {
            body += chunk;
          });
          res.on("end", () => {
            server.close(() => resolve({ status: res.statusCode, body }));
          });
        }
      );

      req.on("error", (error) => {
        server.close(() => reject(error));
      });

      req.end();
    });
  });
}

test("GET / returns the welcome message", async () => {
  const response = await request("/");
  assert.strictEqual(response.status, 200);
  assert.strictEqual(response.body, "Welcome to Express Basics");
});

test("GET /greet returns a friendly message", async () => {
  const response = await request("/greet");
  assert.strictEqual(response.status, 200);
  assert.strictEqual(response.body, "Hello from Express Basics");
});

test("GET /health returns ok", async () => {
  const response = await request("/health");
  assert.strictEqual(response.status, 200);
  assert.strictEqual(response.body, '{"status":"ok"}');
});
