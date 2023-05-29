const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

const db = new sqlite3.Database('./database.sqlite');

// Middleware to parse request body
app.use(express.json());

// Get a list of all extensions
app.get('/extensions', (req, res) => {
  const query = 'SELECT * FROM extensions';
  console.log('query123: '+query)
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).send({ error: err.message });
    } else {
      res.send(rows);
    }
  });
});

// Get the latest version of an extension
app.get('/extensions/:id/version', (req, res) => {
  const query = 'SELECT version FROM extensions WHERE id = ?';
  db.get(query, [req.params.id], (err, row) => {
    if (err) {
      res.status(500).send({ error: err.message });
    } else {
      res.send(row.version);
    }
  });
});

// Upload an extension and add it to the database
app.post('/extensions/upload', (req, res) => {
  const { name, version, description, createdBy } = req.body;
  const query = 'INSERT INTO extensions (name, version, description, createdBy) VALUES (?, ?, ?, ?)';
  db.run(query, [name, version, description, createdBy], function(err) {
    if (err) {
      res.status(500).send({ error: err.message });
    } else {
      res.send({ id: this.lastID });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
