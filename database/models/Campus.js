/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
    allowNull: true // allow null/empty
  },

  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'https://via.placeholder.com/150' // default image
  }
});

// Export the campus model
module.exports = Campus;