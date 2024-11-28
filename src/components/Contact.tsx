// pages/contact.tsx

import React from "react";

const Contact: React.FC = () => {
  return (
    <div suppressHydrationWarning className="min-h-screen text-gray-800">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Contact Us
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8 max-w-2xl mx-auto">
          Have questions or need assistance? Reach out to us, and we`&apos;`ll get back to you as soon as possible.
        </p>
        <form className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Full Name"
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
              placeholder="Your Email Address"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-600 font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600 font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Your Message"
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
