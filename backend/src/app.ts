import express from "express"
import cors from 'cors';
import dotenv from 'dotenv';
import bodyparser from 'body-parser';
import path from 'path';
import { createEventRoute } from "./routes/createEventRoute";
import fs from "fs";

const uploadsDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended:true}))
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use('/api',createEventRoute)

export default app 