/*==================================================
/database/db.js

It sets up Sequelize with Postgres database. 
- Create a Sequelize instance to connect to the database specifying database name, username, and password.
==================================================*/
/* INSTANTIATE DATABASE */ 

// Import module dependencies
const Sequelize = require('sequelize');  // Import Sequelize
require('dotenv').config();  // Load environment variables

// Display a confirmation message for opening a database connection
console.log('Opening database connection');
console.log('Database URL:', process.env.DATABASE_URL);

// This is the Sequelize entry point for connecting to the database. 
// Instantiate the Sequelize instance with database URL from environment variables
const db = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: console.log,
  dialectOptions: {
    ssl: false
  }
});

// Test the connection
db.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Export Sequelize instance, which will be modified with models.
module.exports = db;