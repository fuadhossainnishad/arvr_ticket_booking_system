'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "motion/react";

interface Event {
  id: number;
  title: string;
  availableSeats: number;
  ticketPrice: number;
}

const BookingTable: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const [seats, setSeats] = useState<number>(1);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("/api/events"); // Adjust endpoint as needed
      setEvents(response.data);
    } catch (error) {
      console.log("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleBooking = async () => {
    if (!selectedEventId) {
      alert("Please select an event.");
      return;
    }

    const selectedEvent = events.find((event) => event.id === selectedEventId);

    if (!selectedEvent) {
      alert("Invalid event selected.");
      return;
    }

    if (seats > selectedEvent.availableSeats) {
      alert("Not enough available seats.");
      return;
    }

    try {
      await axios.post("/api/bookings", { eventId: selectedEventId, seats });
      alert("Event booked successfully!");
      fetchEvents(); // Refresh events to show updated available seats
    } catch (error) {
      console.error("Error booking event:", error);
      alert("Failed to book event.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-xl mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-center text-2xl font-bold mb-6 text-blue-600">
        Book Your Event
      </h2>

      <div className="mb-5">
        <label
          className="block text-sm font-semibold text-gray-700 mb-2"
          htmlFor="event-select"
        >
          Select Event
        </label>
        <select
          id="event-select"
          value={selectedEventId ?? ""}
          onChange={(e) => setSelectedEventId(Number(e.target.value))}
          className="w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>
            Choose an event
          </option>
          {events.map((event) => (
            <option key={event.id} value={event.id}>
              {event.title} - {event.availableSeats} seats left - $
              {event.ticketPrice} per ticket
            </option>
          ))}
        </select>
      </div>

      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Seats
        </label>
        <input
          type="number"
          min={1}
          max={selectedEventId ? events.find((e) => e.id === selectedEventId)?.availableSeats : 1}
          value={seats}
          onChange={(e) => setSeats(Number(e.target.value))}
          placeholder="Number of Seats"
          className="w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBooking}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
      >
        Book Event
      </motion.button>
    </motion.div>
  );
};

export default BookingTable;
