'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";

interface BookingComponentProps {
  eventId: number; // Pass the event ID as a prop
}

const BookingComponent: React.FC<BookingComponentProps> = ({ eventId }) => {
  const [event, setEvent] = useState<{
    title: string;
    description: string;
    totalSeats: number;
    ticketPrice: number;
    eventDate: string;
    availableSeats: number;
  } | null>(null);

  const [seats, setSeats] = useState(1);

  useEffect(() => {
    // Fetch event details
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(`/api/events/${eventId}`);
        setEvent(response.data);
      } catch (error) {
        console.log("Error fetching event details:", error);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  const handleBooking = async () => {
    if (!event) return;

    if (seats > event.availableSeats) {
      alert("Not enough available seats.");
      return;
    }

    try {
      const response = await axios.post(`/api/bookings`, {
        eventId,
        seats,
      });
     if (response.status === 200) {
        alert("Booking successful!");
        setEvent((prev) =>
          prev ? { ...prev, availableSeats: prev.availableSeats - seats } : prev
        );
        
     }
    } catch (error) {
      console.error("Error booking seats:", error);
      alert("Booking failed.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded">
      {event ? (
        <>
          <h2 className="text-xl font-bold mb-4">{event.title}</h2>
          <p className="text-sm mb-2">{event.description}</p>
          <p className="text-sm mb-2">
            <strong>Event Date:</strong> {new Date(event.eventDate).toLocaleDateString()}
          </p>
          <p className="text-sm mb-2">
            <strong>Ticket Price:</strong> ${event.ticketPrice}
          </p>
          <p className="text-sm mb-4">
            <strong>Available Seats:</strong> {event.availableSeats}
          </p>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Seats to Book</label>
            <input
              type="number"
              min={1}
              max={event.availableSeats}
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
            Book Now
          </button>
        </>
      ) : (
        <p>Loading event details...</p>
      )}
    </div>
  );
};

export default BookingComponent;
