import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import path from "path";
import fs from "fs";
import { createEventRoute } from "./routes/createEventRoute";
import getEventRoute from "./routes/getEventRoute";
import getAllEventRoute from "./routes/getAllEventRoute";
import getUserRoute from "./routes/userRoute";
import getAdminRoute from "./routes/adminRoute";

// Load environment variables
dotenv.config();

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Use built-in Express middleware
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Routes
app.use("/api/", getAllEventRoute);
app.use("/api/", createEventRoute);
app.use("/api/", getEventRoute);
app.use("/api/", getUserRoute);
app.use("/api/", getAdminRoute);

// Export app
export default app;
