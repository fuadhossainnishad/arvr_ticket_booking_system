'use client'
import React, { useState } from "react";
import { client } from "@/lib/client";

const CreateEvent: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    totalSeats: 0,
    ticketPrice: 0,
    eventDate: "",
    coverPhoto: null as File | null,
  });

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
      const response = await client.post("/api/events", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if(response.status === 200){
        alert("Event created successfully!");
      }
    } catch (error) {
      console.log(error);
      alert("Error creating event");
    }
  };

  return (
    <form suppressHydrationWarning onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded"> 
      <h2 className="text-xl font-bold mb-4">Create Event</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Event Title"
          className="w-full border p-2 rounded"
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
          rows={4}
          placeholder="Event Description"
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
          placeholder="Total Seats"
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
          placeholder="Ticket Price"
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
          placeholder="Event Date"
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
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Create Event
      </button>
    </form>
  );
};

export default CreateEvent;
