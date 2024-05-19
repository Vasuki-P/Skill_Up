const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'Learning_App',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Existing endpoints
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  const checkUserQuery = 'SELECT * FROM users WHERE username = ?';
  db.query(checkUserQuery, [username], (checkUserError, results) => {
    if (checkUserError) {
      console.error('Error checking user:', checkUserError);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.length > 0) {
        res.status(409).json({ error: 'Username already exists' });
      } else {
        const insertUserQuery = 'INSERT INTO users (username, password) VALUES (?, ?)';
        db.query(insertUserQuery, [username, password], (insertUserError) => {
          if (insertUserError) {
            console.error('Error inserting user:', insertUserError);
            res.status(500).json({ error: 'Internal Server Error' });
          } else {
            res.status(201).json({ message: 'Registration successful' });
          }
        });
      }
    }
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const loginUserQuery = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(loginUserQuery, [username, password], (loginUserError, results) => {
    if (loginUserError) {
      console.error('Error logging in user:', loginUserError);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.length > 0) {
        const userType = results[0].userType; // Assuming user type is stored in the 'userType' column
        res.status(200).json({ message: 'Login successful', userType });
      } else {
        res.status(401).json({ error: 'Invalid username or password' });
      }
    }
  });
});








app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
