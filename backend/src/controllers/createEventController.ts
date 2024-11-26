import { Request, Response } from "express";
import db from "../config/dbconfig";
import { ResultSetHeader } from "mysql2";

const createEventController= async(req:Request,res:Response)=>{
    const { title, description, totalSeats, ticketPrice, eventDate } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: "Cover photo is required" });
  }

  const coverPhotoPath = req.file.path;

  try {
    const [result] = await db.query<ResultSetHeader>(
      `INSERT INTO events (title, description, totalSeats, ticketPrice, eventDate, coverPhoto) VALUES (?, ?, ?, ?, ?, ?)`,
      [title, description, totalSeats, ticketPrice, eventDate, coverPhotoPath]
    );
    

    res.status(200).json({
      status: "success",
      message: "Event created successfully",
      eventId: result.insertId,
    });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default createEventController;