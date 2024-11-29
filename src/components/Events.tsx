"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/lib/client";

interface Event {
  id: number;
  title: string;
  description: string;
  totalSeats: number;
  ticketPrice: number;
  eventDate: string;
  coverPhoto: string;
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const response = await client.get("/api/events"); // Replace with your backend API endpoint
      setEvents(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching events:", error);
      setLoading(false);
    }
  };

  // const bookEvent = async (id: number) => {};

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div
      suppressHydrationWarning
      className="container min-h-screen my-12 text-gray-800 mx-auto py-12 px-6 flex flex-col items-center "
    >
      <h1 className="text-3xl font-bold text-center mb-6">All Events</h1>

      {loading ? (
        <div className="text-center text-xl">Loading events...</div>
      ) : events.length === 0 ? (
        <div className="text-center text-xl">No events found.</div>
      ) : (
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="border rounded shadow hover:shadow-lg transition p-4"
            >
              <Image
                src={`http://localhost:5000${event.coverPhoto}`}
                alt={event.title}
                className="w-full h-48 rounded mb-4"
                width={4}
                height={4}
                quality={100}
                unoptimized= {true}                
                placeholder="empty"
              />
              <h2 className="text-xl font-bold mb-2">{event.title}</h2>
              <p className="text-sm mb-2 text-gray-600">
                Event Date:{new Date(event.eventDate).toLocaleDateString()}
              </p>
              <p className="text-sm mb-4">Event Details:{event.description}</p>
              <p className="text-sm font-semibold mb-4">
                Price Rate:${event.ticketPrice} per ticket
              </p>
              {/* <p className="text-sm mb-4">
                <strong>{event.availableSeats}</strong> seats available
              </p> */}
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Book Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
