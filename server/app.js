// server/app.js

const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const PORT = process.env.PORT || 3001;

// SQLite3データベースの作成（もしくは既存のデータベースに接続）
const db = new sqlite3.Database(path.join(__dirname, 'cashnyan.db'));

// データベースの初期化（必要に応じてテーブルの作成などを行う）
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS transactions (id INTEGER PRIMARY KEY AUTOINCREMENT, amount REAL, category TEXT, type TEXT)");
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // JSONパーサーを有効化

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../.next/static/chunks/pages/index.js'));
});

// 新しい取引を追加するエンドポイント
app.post('/api/save-expenditure', (req, res) => {
  const { amountExpenditure } = req.body;

  if (!amountExpenditure) {
    res.status(400).json({ error: 'Missing required field: amountExpenditure' });
  } else {
    db.run("INSERT INTO transactions (amount, category, type) VALUES (?, 'Expenditure', 'Expense')", [amountExpenditure], (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ message: 'Expenditure added successfully' });
      }
    });
  }
});

// 残高を取得するエンドポイント
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});