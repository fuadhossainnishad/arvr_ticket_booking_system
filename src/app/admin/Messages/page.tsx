'use client'
import React, { useEffect, useState } from "react";
import { client } from "@/lib/client";

type ContactMessage = {
  contact_id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Page() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await client.get("/api/contacts/");
        setMessages(response.data);
      } catch (error:unknown) {
        setError("Failed to fetch messages. Please try again.");
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return <div>Loading messages...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Messages</h1>
      {messages.length > 0 ? (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Subject</th>
              <th className="border border-gray-300 px-4 py-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message.contact_id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 text-center">{message.contact_id}</td>
                <td className="border border-gray-300 px-4 py-2">{message.name}</td>
                <td className="border border-gray-300 px-4 py-2">{message.email}</td>
                <td className="border border-gray-300 px-4 py-2">{message.subject}</td>
                <td className="border border-gray-300 px-4 py-2">{message.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No messages available.</div>
      )}
    </div>
  );
}
