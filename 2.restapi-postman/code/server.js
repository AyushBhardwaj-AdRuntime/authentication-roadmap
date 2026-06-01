const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Simple in-memory store
let items = [];
let nextId = 1;

// GET /items - list all items
app.get('/items', (req, res) => {
  res.json(items);
});

// GET /items/:id - get single item
app.get('/items/:id', (req, res) => {
  const id = Number(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
});

// POST /items - create an item
app.post('/items', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Missing name' });
  const item = { id: nextId++, name };
  items.push(item);
  res.status(201).json(item);
});

// PUT /items/:id - update an item
app.put('/items/:id', (req, res) => {
  const id = Number(req.params.id);
  const { name } = req.body;
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ error: 'Not found' });
  if (!name) return res.status(400).json({ error: 'Missing name' });
  item.name = name;
  res.json(item);
});

// DELETE /items/:id - remove an item
app.delete('/items/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = items.findIndex(i => i.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  const [deleted] = items.splice(idx, 1);
  res.json(deleted);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`REST demo running at http://localhost:${PORT}`);
    console.log('Available endpoints: GET /items, POST /items, GET /items/:id, PUT /items/:id, DELETE /items/:id');
  });
}

module.exports = app;
