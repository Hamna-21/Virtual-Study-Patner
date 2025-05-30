const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000; // Port you want to run the server on

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password', // Replace 'your_password' with your MySQL password
  database: 'testdb' // Replace with your database name
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.log('Error connecting to the database:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Register endpoint
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const checkUserQuery = 'SELECT * FROM users WHERE username = ?';
  db.query(checkUserQuery, [username], (err, result) => {
    if (err) {
      return res.status(500).send('Error checking username');
    }
    if (result.length > 0) {
      return res.status(400).send('Username already exists');
    }

    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).send('Error hashing password');
      }

      const insertUserQuery = 'INSERT INTO users (username, password) VALUES (?, ?)';
      db.query(insertUserQuery, [username, hashedPassword], (err, result) => {
        if (err) {
          return res.status(500).send('Error registering user');
        }
        res.status(201).send('User registered successfully');
      });
    });
  });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const getUserQuery = 'SELECT * FROM users WHERE username = ?';
  db.query(getUserQuery, [username], (err, result) => {
    if (err) {
      return res.status(500).send('Error fetching user');
    }

    if (result.length === 0) {
      return res.status(401).send('User not found');
    }

    const user = result[0];

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).send('Error comparing passwords');
      }

      if (isMatch) {
        res.status(200).send('Login successful');
      } else {
        res.status(401).send('Invalid password');
      }
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
