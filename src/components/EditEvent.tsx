'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";

interface EditEventProps {
  eventId: number; // Pass the event ID as a prop
}

const EditEvent: React.FC<EditEventProps> = ({ eventId }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    totalSeats: 0,
    ticketPrice: 0,
    eventDate: "",
    coverPhoto: null as File | null,
  });

  useEffect(() => {
    // Fetch event data
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`/api/events/${eventId}`);
        const event = response.data;
        setFormData({
          title: event.title,
          description: event.description,
          totalSeats: event.totalSeats,
          ticketPrice: event.ticketPrice,
          eventDate: event.eventDate,
          coverPhoto: null,
        });
      } catch (error) {
        console.log("Error fetching event:", error);
        alert("Failed to load event data.");
      }
    };

    fetchEvent();
  }, [eventId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, coverPhoto: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("totalSeats", String(formData.totalSeats));
    formDataToSend.append("ticketPrice", String(formData.ticketPrice));
    formDataToSend.append("eventDate", formData.eventDate);
    if (formData.coverPhoto) formDataToSend.append("coverPhoto", formData.coverPhoto);

    try {
      await axios.put(`/api/events/${eventId}`, formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Event updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Error updating event.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Edit Event</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder={formData.title}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder={formData.description}
          rows={4}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Total Seats</label>
        <input
          type="number"
          name="totalSeats"
          value={formData.totalSeats}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder={String(formData.totalSeats) } 
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Ticket Price</label>
        <input
          type="number"
          name="ticketPrice"
          value={formData.ticketPrice}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder={String(formData.ticketPrice)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Event Date</label>
        <input
          type="date"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder={formData.eventDate}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Cover Photo</label>
        <input
          type="file"
          name="coverPhoto"
          onChange={handleFileChange}
          className="w-full border p-2 rounded"
          placeholder="Event Cover Photo"
          accept="image/*"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Update Event
      </button>
    </form>
  );
};

export default EditEvent;