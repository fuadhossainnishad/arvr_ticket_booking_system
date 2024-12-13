"use client";

import { client } from "@/lib/client";
import { useState } from "react";

interface ContactInterface {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [contactForm, setContactForm] = useState<ContactInterface>({
    name: " ",
    email: " ",
    subject: " ",
    message: " ",
  });

  const messageHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };
  const postmessageHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await client.post("/api/contacts", contactForm, {
        headers: { "Content-type": "application/json" },
      });

      if (response.status === 200) {
        alert("Message sent successfully!");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to send message. Please try again later.");
    }
  };
  return (
    <div suppressHydrationWarning className="min-h-screen text-gray-800">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Contact Us
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8 max-w-2xl mx-auto">
          Have questions or need assistance? Reach out to us, and we`&apos;`ll
          get back to you as soon as possible.
        </p>
        <form
          onSubmit={postmessageHandler}
          className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={contactForm.name}
              onChange={messageHandler}
              required
              placeholder={contactForm.name || "Your Full Name"}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactForm.email}
              onChange={messageHandler}
              required
              placeholder={contactForm.email || "Your Email Address"}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-gray-600 font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={contactForm.subject}
              onChange={messageHandler}
              required
              placeholder={contactForm.subject || "Subject"}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-600 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={contactForm.message}
              onChange={messageHandler}
              required
              rows={4}
              placeholder={contactForm.message || "Your Message"}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
