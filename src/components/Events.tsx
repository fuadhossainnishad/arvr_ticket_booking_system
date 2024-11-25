'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

interface Event {
  id: number;
  title: string;
  description: string;
  totalSeats: number;
  availableSeats: number;
  ticketPrice: number;
  eventDate: string;
  coverPhoto: string;
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("/api/events"); // Replace with your backend API endpoint
      setEvents(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching events:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">All Events</h1>

      {loading ? (
        <div className="text-center text-xl">Loading events...</div>
      ) : events.length === 0 ? (
        <div className="text-center text-xl">No events found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="border rounded shadow hover:shadow-lg transition p-4"
            >
              <Image
                src={event.coverPhoto}
                alt={event.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{event.title}</h2>
              <p className="text-sm mb-2 text-gray-600">
                {new Date(event.eventDate).toLocaleDateString()}
              </p>
              <p className="text-sm mb-4">{event.description}</p>
              <p className="text-sm font-semibold mb-4">
                ${event.ticketPrice} per ticket
              </p>
              <p className="text-sm mb-4">
                <strong>{event.availableSeats}</strong> seats available
              </p>
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
