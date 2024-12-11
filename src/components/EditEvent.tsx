"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/lib/client";
import Image from "next/image";
import { formateDate } from "@/lib/formateDate";

interface EditEventProps {
  eventId: number;
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
  const [previewPhoto, setPreviewPhoto] = useState<string | null>("");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await client.get(`/api/events/:${eventId}`);
        const event = response.data;
        console.log(event);

        setFormData({
          title: event.title,
          description: event.description,
          totalSeats: event.totalSeats,
          ticketPrice: event.ticketPrice,
          eventDate: formateDate(event.eventDate),
          coverPhoto: null,
        });
        console.log(event.eventDate)
        setPreviewPhoto(event.coverPhoto);
      } catch (error) {
        console.log("Error fetching event:", error);
        alert("Failed to load event data.");
      }
    };

    fetchEvent();
  }, [eventId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFormData({ ...formData, coverPhoto: file });
      setPreviewPhoto(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // const formDataToSend = new FormData();
    // formDataToSend.append("title", formData.title);
    // formDataToSend.append("description", formData.description);
    // formDataToSend.append("totalSeats", String(formData.totalSeats));
    // formDataToSend.append("ticketPrice", String(formData.ticketPrice));
    // formDataToSend.append("eventDate", formData.eventDate);
    // if (formData.coverPhoto)
    //   formDataToSend.append("coverPhoto", formData.coverPhoto);

    try {
      await client.put(`/api/events/:${eventId}`, formData, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Event updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Error updating event.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 border rounded"
    >
      <h2 className="text-xl font-bold mb-4">Edit Event</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder={formData.title}
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
          placeholder={formData.description}
          className="w-full border p-2 rounded"
          rows={4}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Total Seats</label>
        <input
          type="number"
          name="totalSeats"
          value={formData.totalSeats || undefined}
          onChange={handleChange}
          placeholder={`${formData.totalSeats || undefined}`}
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Ticket Price</label>
        <input
          type="number"
          name="ticketPrice"
          value={formData.ticketPrice || undefined}
          onChange={handleChange}
          placeholder={`${formData.ticketPrice || undefined}`}
          className="w-full border p-2 rounded"
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
          placeholder={formData.eventDate}
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Cover Photo</label>
        <input
          type="file"
          name="coverPhoto"
          onChange={handleFileChange}
          placeholder={`${formData.coverPhoto}`}
          className="w-full border p-2 rounded"
          accept="image/*"
        />
        {previewPhoto && (
          <Image
            src={previewPhoto}
            alt={formData.title || "Event Cover Photo"}
            width={500}
            height={300}
            className="mt-2"
          />
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Update Event
      </button>
    </form>
  );
};

export default EditEvent;
