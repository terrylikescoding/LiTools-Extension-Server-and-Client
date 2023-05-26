import sqlite3

# 连接到数据库（如果不存在，则创建）
conn = sqlite3.connect('database.sqlite')

# 创建一个游标对象
cursor = conn.cursor()

# 创建一个名为 persons 的表
sql = '''
CREATE TABLE IF NOT EXISTS extensions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  version TEXT NOT NULL,
  description TEXT,
  createdBy TEXT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

'''


cursor.execute(sql)

inertSql = """
INSERT INTO extensions (name, version, description, createdBy)
VALUES
  ('extension1', '1.0.0', 'This is extension 1', 'User A'),
  ('extension2', '2.1.0', 'This is extension 2', 'User B'),
  ('extension3', '3.0.1', 'This is extension 3', 'User C'),
  ('extension4', '1.2.3', 'This is extension 4', 'User D'),
  ('extension5', '2.0.0', 'This is extension 5', 'User E');
"""

cursor.execute(sql)


# 提交更改
conn.commit()

# 关闭数据库连接
conn.close()
