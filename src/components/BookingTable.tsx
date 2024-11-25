'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="max-w-lg mx-auto p-4 border rounded shadow">
      <h2 className="text-center text-xl font-bold mb-4">Book Your Event</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="event-select">Select Event</label>
        <select
        id="event-select"
          value={selectedEventId ?? ""}
          onChange={(e) => setSelectedEventId(Number(e.target.value))}
          className="w-full border p-2 rounded"
        >
          <option value="" disabled>
            Choose an event
          </option>
          {events.map((event) => (
            <option key={event.id} value={event.id}>
              {event.title} - {event.availableSeats} seats left - ${event.ticketPrice} per ticket
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Seats</label>
        <input
          type="number"
          min={1}
          max={selectedEventId ? events.find((e) => e.id === selectedEventId)?.availableSeats : 1}
          value={seats}
          onChange={(e) => setSeats(Number(e.target.value))}
          placeholder="Seats"
          className="w-full border p-2 rounded"
        />
      </div>

      <button
        onClick={handleBooking}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Book Event
      </button>
    </div>
  );
};

export default BookingTable;
