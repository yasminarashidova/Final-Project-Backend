/*==================================================
/app.js

This is the top-level (main) file for the server application.
It initiates all required parts of server application such as Express, routes, database, etc.
==================================================*/

/* SET UP DATABASE */
const createDB = require('./database/utils/createDB');
const seedDB = require('./database/utils/seedDB');
const db = require('./database');

/* SET UP EXPRESS APPLICATION */
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

/* SET UP ROUTES */
const apiRouter = require('./routes/index');

/* MODEL SYNCHRONIZATION & DATABASE SEEDING */
const syncDatabase = async () => {
  try {
    console.log('Starting database sync...');
    await db.sync({ force: true });
    console.log('------Synced to db--------');

    console.log('Starting database seeding...');
    await seedDB();
    console.log('--------Successfully seeded db--------');
  } catch (err) {
    console.error('syncDB error:', err);
    throw err;
  }
};

/* CONFIGURE EXPRESS APPLICATION */
const configureApp = async () => {
  console.log('Configuring Express application...');

  // Configure CORS
  app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }));
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Mount API routes
  app.use("/api", apiRouter);

  // Serve static frontend from React build
  app.use(express.static(path.join(__dirname, "public", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "build", "index.html"));
  });

  // Error handling middleware
  app.use((req, res, next) => {
    const error = new Error("Not Found, Please Check URL!");
    error.status = 404;
    next(error);
  });

  app.use((err, req, res, next) => {
    console.error(err);
    console.log(req.originalUrl);
    res.status(err.status || 500).send(err.message || "Internal server error.");
  });

  console.log('Express application configured successfully');
};

/* SERVER BOOT PROCESS */
const bootApp = async () => {
  try {
    console.log('Starting server boot process...');
    
    console.log('Initializing database...');
    await createDB();
    await syncDatabase();
    await configureApp();

    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    console.log('Server boot process completed successfully');
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

/* START SERVER */
bootApp();
