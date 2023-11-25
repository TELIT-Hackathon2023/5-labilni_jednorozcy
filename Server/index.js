require("dotenv").config();
require("./db/db");

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors());

//user
const userRoutes = require("./routes/user");
app.use("/api/user", userRoutes);

//user
const carRoutes = require("./routes/car");
app.use("/api/car", carRoutes);

try {
  app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
  });
} catch (error) {
  console.error("Error starting server:", error);
}
