"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/lib/client";

interface DashboardData {
  totalUsers: number;
  totalEvents: number;
  eventsByDate: { date: string; count: number }[];
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
        console.log("API Response:", response.data);
        setData(response.data);
        console.log(response.data)
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
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
          <p className="text-3xl font-bold text-gray-900">
            {data?.totalUsers ?? 0}
          </p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">Total Events</h2>
          <p className="text-3xl font-bold text-gray-900">
            {data?.totalEvents ?? 0}
          </p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">
            Events by Date
          </h2>
          <ul className="text-gray-800">
            {(data?.eventsByDate ?? []).map((event, index) => (
              <li key={index} className="flex justify-between border-b py-2">
                <span>{event.date}</span>
                <span>{event.count}</span>
              </li>
            ))}
            {data?.eventsByDate?.length === 0 && (
              <li className="text-gray-500">No events found.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
