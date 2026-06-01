const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Stateless demo endpoints: return simple messages per HTTP method.

// GET /items - list (stateless demo)
app.get('/items', (req, res) => {
  res.json({ message: 'GET /items called' });
});

// GET /items/:id - get single item (stateless demo)
app.get('/items/:id', (req, res) => {
  res.json({ message: `GET /items/${req.params.id} called` });
});

// POST /items - create (stateless demo)
app.post('/items', (req, res) => {
  res.status(201).json({ message: 'POST /items called — item created (demo)' });
});

// PUT /items/:id - update (stateless demo)
app.put('/items/:id', (req, res) => {
  res.json({ message: `PUT /items/${req.params.id} called — item updated (demo)` });
});

// DELETE /items/:id - delete (stateless demo)
app.delete('/items/:id', (req, res) => {
  res.json({ message: `DELETE /items/${req.params.id} called — item deleted (demo)` });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`REST demo running at http://localhost:${PORT}`);
    console.log('Available endpoints: GET /items, POST /items, GET /items/:id, PUT /items/:id, DELETE /items/:id');
  });
}

module.exports = app;
