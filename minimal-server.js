const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
require('dotenv').config();

const app = express();

// Basic middleware
app.use(cors());
app.use(express.json());

// Database connection
const db = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: console.log
});

// Test database connection
db.authenticate()
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Unable to connect to the database:', err));

// Basic routes
app.get('/api/campuses', async (req, res) => {
  try {
    const [results] = await db.query('SELECT * FROM campuses');
    res.json(results);
  } catch (error) {
    console.error('Error fetching campuses:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/campuses', async (req, res) => {
  try {
    const { name, address, description, imageUrl } = req.body;
    const [result] = await db.query(
      'INSERT INTO campuses (name, address, description, imageUrl, "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, NOW(), NOW()) RETURNING *',
      [name, address, description, imageUrl]
    );
    res.status(201).json(result[0]);
  } catch (error) {
    console.error('Error creating campus:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Minimal server running on port ${PORT}`);
}); 