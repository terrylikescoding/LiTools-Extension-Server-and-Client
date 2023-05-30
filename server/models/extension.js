const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

const extensionSchema = {
  id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
  name: 'TEXT NOT NULL',
  version: 'TEXT NOT NULL',
  description: 'TEXT',
  createdBy: 'TEXT',
  createdAt: 'DATETIME DEFAULT CURRENT_TIMESTAMP',
  updatedAt: 'DATETIME',
};

const Extension = {};

Extension.create = (extensionData) =>
  new Promise((resolve, reject) => {
    const query = `INSERT INTO extensions (name, version, description, createdBy)
                   VALUES (?, ?, ?, ?)`;
    const { name, version, description, createdBy } = extensionData;
    db.run(
      query,
      [name, version, description, createdBy],
      function (err) {
        if (err) return reject(err);
        resolve(this.lastID);
      }
    );
  });

Extension.findById = (id) =>
  new Promise((resolve, reject) => {
    const query = `SELECT * FROM extensions WHERE id = ?`;
    db.get(query, id, (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });

Extension.find = ({ page, pageSize, name, version, createdBy }) =>
  new Promise((resolve, reject) => {
    let query = `SELECT * FROM extensions`;
    const whereClauses = [];
    const whereValues = [];

    if (name) {
      whereClauses.push(`name = ?`);
      whereValues.push(name);
    }

    if (version) {
      whereClauses.push(`version = ?`);
      whereValues.push(version);
    }

    if (createdBy) {
      whereClauses.push(`createdBy = ?`);
      whereValues.push(createdBy);
    }

    if (whereClauses.length > 0) {
      query += ` WHERE ${whereClauses.join(' AND ')}`;
    }

    const startIndex = (page - 1) * pageSize;
    query += ` LIMIT ? OFFSET ?`;
    whereValues.push(pageSize, startIndex);

    db.all(query, whereValues, (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });

Extension.findPage = (page, pageSize) =>
  new Promise((resolve, reject) => {
    const startIndex = (page - 1) * pageSize;
    const query = `SELECT * FROM extensions LIMIT ? OFFSET ?`;
    db.all(query, [pageSize, startIndex], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });

Extension.count = () =>
  new Promise((resolve, reject) => {
    const query = `SELECT COUNT(*) AS count FROM extensions`;
    db.get(query, (err, row) => {
      if (err) return reject(err);
      resolve(row.count);
    });
  });

module.exports = Extension;
