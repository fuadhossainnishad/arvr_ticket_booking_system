'use client'
import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import axios from "axios";
import {  useSelector } from "react-redux";
import { RooteState } from "@/store/store";

interface BookedEvent {
  id: number;
  eventTitle: string;
  eventDate: string;
  ticketPrice: number;
  seats: number;
}

const MyEvent: React.FC = () => {
  const userId=useSelector((state:RooteState)=>state.id.userid)
  const [bookedEvents, setBookedEvents] = useState<BookedEvent[]>([]);
  const [loading, setLoading] = useState(true);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const router = useRouter();

  // const checkAuth = () => {
  //   const token = localStorage.getItem("authToken");
  //   return !!token;
  // };

  const fetchBookedEvents = async (userId:number) => {
    try {
      const response = await axios.get(`/api/bookings:${userId}`, {
        headers: {"Content-Type": "application/json"
        },
      });
      setBookedEvents(response.data);
    } catch (error) {
      console.log("Error fetching booked events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookedEvents(userId)
  }, [userId]);

  // if (!isAuthenticated) return null; // Prevent rendering before authentication check

  return (
    <div className="container mx-auto  ">
      <h1 className="text-3xl font-bold text-center mb-6">My Booked Events</h1>

      {loading ? (
        <div className="text-center text-xl">Loading your events...</div>
      ) : bookedEvents.length === 0 ? (
        <div className="text-center text-xl">You haven&apos;t booked any events yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookedEvents.map((event) => (
            <div
              key={event.id}
              className="border rounded shadow hover:shadow-lg transition p-4"
            >
              <h2 className="text-xl font-bold mb-2">{event.eventTitle}</h2>
              <p className="text-sm mb-2 text-gray-600">
                {new Date(event.eventDate).toLocaleDateString()}
              </p>
              <p className="text-sm mb-4">
                Tickets Booked: <strong>{event.seats}</strong>
              </p>
              <p className="text-sm font-semibold mb-4">
                Total Cost: ${event.ticketPrice * event.seats}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyEvent;
