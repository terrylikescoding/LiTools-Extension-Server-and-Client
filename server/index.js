/**
 *
 * 添加错误处理逻辑，以便在发生错误时返回适当的 HTTP 响应码或错误信息。
  实现更多的 RESTful API，例如创建扩展，更新扩展和删除扩展等。
  优化数据库查询性能，例如使用索引和缓存等技术来加速查询。
  实现用户认证和授权，以便只有经过身份验证的用户可以访问受保护的资源。 
 */
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const Extension = require('./models/extension');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

const db = new sqlite3.Database('./database.sqlite');

// Middleware to parse request body
app.use(express.json());

// Get a list of all extensions
app.get('/extensions', async (req, res) => {
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 10;
  const name = req.query.name || null;
  const version = req.query.version || null;
  const createdBy = req.query.createdBy || null;

  try {
    const extensions = await Extension.find({ page, pageSize, name, version, createdBy });
    const totalExtensions = extensions.length;
    const totalPages = Math.ceil(totalExtensions / pageSize);

    res.send({
      extensions,
      pageInfo: {
        currentPage: page,
        totalPages,
        pageSize,
        totalExtensions,
      },
    });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
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

// 处理 /extensions/:id GET 请求，返回特定扩展的详细信息
app.get('/extensions/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM extensions WHERE id = ?';
  console.log('.....:'+id)
  db.get(sql, [id], (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal server error');
    } else {
      if (!row) {
        res.status(404).send('Extension not found');
      } else {
        res.json(row);
      }
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
