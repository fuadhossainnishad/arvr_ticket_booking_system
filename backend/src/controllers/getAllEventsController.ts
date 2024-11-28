import { Request, Response } from "express";
import db from "../config/dbconfig";
import { coverPhotoHandle } from "../lib/coverPhotoUrl";
import { Event } from "../interface/eventInterface";
export const getAllEventsController = async (req: Request, res: Response) => {
  const allEventquery = `SELECT * FROM events`;
  try {
    const [allEventsResponse] = await db.query<Event[]>(allEventquery);
    if (!allEventsResponse) {
      return res.status(404).json({ message: "No events found." });
    }
    const protocol = req.protocol; // http or https
    const host = req.get('host'); // e.g., localhost:3000 or example.com
    const enhancedEvents= allEventsResponse.map((event) => ({
      ...event,
      coverPhoto: coverPhotoHandle(protocol, host, event.coverPhoto),
    }));

    res.status(200).json(enhancedEvents);
    console.log("All events:", enhancedEvents);
  } catch (error) {
    res.status(500).send("Server error for query all events");
    console.log("All event:", error);
  }
};
