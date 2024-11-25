import express from "express"
import cors from 'cors';
import dotenv from 'dotenv';
import bodyparser, { urlencoded } from 'body-parser';
import path from 'path';
import { createEventRoute } from "./routes/createEventRoute";

const app = express();
app.use(cors());
app.use(bodyparser.json())
app.use(urlencoded({ extended:true}))
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
dotenv.config();

app.use('/api',createEventRoute)

export default app 