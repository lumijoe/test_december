// server/app.js

const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const PORT = process.env.PORT || 3000;

// SQLite3データベースの作成（もしくは既存のデータベースに接続）
const db = new sqlite3.Database(path.join(__dirname, 'cashnyan.db'));

// データベースの初期化（必要に応じてテーブルの作成などを行う）
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS transactions (id INTEGER PRIMARY KEY AUTOINCREMENT, amount REAL, category TEXT, type TEXT)");
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // JSONパーサーを有効化


// データベースから取得した残高を返すエンドポイントの例
app.get('/api/balance', (req, res) => {
  db.get("SELECT SUM(amount) as balance FROM transactions", (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ balance: row ? row.balance : 0 });
    }
  });
});

// データベースへ新しい取引を追加するエンドポイントの例
app.post('/api/transaction', (req, res) => {
  const { amount, category, type } = req.body;

  if (!amount || !category || !type) {
    res.status(400).json({ error: 'Missing required fields' });
  } else {
    db.run("INSERT INTO transactions (amount, category, type) VALUES (?, ?, ?)", [amount, category, type], (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ message: 'Transaction added successfully' });
      }
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});