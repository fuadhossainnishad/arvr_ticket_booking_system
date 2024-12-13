"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/lib/client";

interface DashboardData {
  total_users: string;
  total_events: string;
  events_by_date: {
    date: string;
    event_count: number;
    event_names: string[];
  }[];
}

const AdminDashboard: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const response = await client.get("/api/admin/dashboard");
        // console.log("API Response:", response.data.admindashboard);
        setData(response.data.admindashboard[0]);
        console.log(response.data.admindashboard[0]);
      } catch (err) {
        setError("Failed to fetch dashboard data");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading)
    return <div className="text-center mt-10 text-lg">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="p-20  bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Total Users */}
        <div className="p-4 bg-white shadow rounded-lg flex justify-between">
          <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
          <p className="text-3xl font-bold text-gray-900">
            {data?.total_users ?? 0}
          </p>
        </div>

        {/* Total Events */}
        <div className="p-4 bg-white shadow rounded-lg flex justify-between">
          <h2 className="text-lg font-semibold text-gray-700">Total Events</h2>
          <p className="text-3xl font-bold text-gray-900">
            {data?.total_events ?? 0}
          </p>
        </div>

        {/* Events by Date */}
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">
            Events by Date
          </h2>
          <ul className="text-gray-800">
            {data?.events_by_date?.map((event, index) => (
              <li key={index} className="border-b py-2">
                <div className="flex justify-between">
                  <span>{event.date}</span>
                  <span>{event.event_count} events</span>
                </div>
                <ul className="text-sm text-gray-600 mt-1 pl-4">
                  {event.event_names.map((name, i) => (
                    <li key={i}>- {name}</li>
                  ))}
                </ul>
              </li>
            ))}
            {data?.events_by_date?.length === 0 && (
              <li className="text-gray-500">No events found.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
