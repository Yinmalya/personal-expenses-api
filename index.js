import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

// Import Routes
// import expenseRoutes from "./routes/expenses.js";
// import userRoutes from "./routes/users.js";



// Connect to MongoDB
await mongoose.connect(process.env.MONGO_URL);

// Create an Express app
const app = express();

// Global Middleware
app.use(express.json());
// // app.use(userRoutes);
// app.use(expenseRoutes);


// Listen for incoming requests
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(` Server listening on port ${port}`);
});