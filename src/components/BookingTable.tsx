"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RooteState } from "@/store/store";
import { client } from "@/lib/client";
import { useRouter } from "next/navigation";
import { createSelector } from "@reduxjs/toolkit";

interface Event {
  id: number;
  title: string;
  ticket_price: number;
  event_date: Date;
}

const BookingTable: React.FC = () => {
  const selectUserId = createSelector(
    (state: RooteState) => state.id,
    (id) => id.userid
  );
  const selectUserAuth = createSelector(
    (state: RooteState) => state.auth,
    (auth) => auth.userSignIn
  );
  const isUserSignIn = useSelector(selectUserAuth);
  const userId = useSelector(selectUserId);
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const [seats, setSeats] = useState<number>(1);
  console.log(userId);
  const router = useRouter();

  const fetchEvents = async () => {
    try {
      const response = await client.get("/api/events");
      setEvents(response.data);
      console.log(response);
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

    // if (seats > selectedEvent.availableSeats) {
    //   alert("Not enough available seats.");
    //   return;
    // }

    try {
      if (!isUserSignIn) {
        router.push("/signin");
        alert("Please sign in to book an event.");
      } else {
        const response = await client.post("/api/bookings", {
          userId,
          eventId: selectedEventId,
          seats,
        });
        console.log(response.data);
        alert("Event booked successfully!");
        fetchEvents();
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching events:", error.message);
        alert("Failed to load events. Please try again later.");
      } else {
        console.error("Unexpected error:", error);
        alert("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <motion.div
      suppressHydrationWarning
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-xl mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg"
    >
      <h2
        suppressHydrationWarning
        className="text-center text-2xl font-bold mb-6 text-blue-600"
      >
        Book Your Event
      </h2>

      <div className="mb-5">
        <label
          suppressHydrationWarning
          className="block text-sm font-semibold text-gray-700 mb-2"
          htmlFor="event-select"
        >
          Select Event
        </label>
        <select
          suppressHydrationWarning
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
              {event.title} - ${event.ticket_price} per ticket - Date:
              {new Date(event.event_date).toLocaleDateString()}
            </option>
          ))}
        </select>
      </div>

      <div suppressHydrationWarning className="mb-5">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Seats
        </label>
        <input
          type="number"
          min={1}
          // max={selectedEventId ? events.find((e) => e.id === selectedEventId)?.availableSeats : 1}
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
