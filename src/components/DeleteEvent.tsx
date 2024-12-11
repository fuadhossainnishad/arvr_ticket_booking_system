'use client'
import { client } from "@/lib/client";

interface DeleteEventProps {
  eventId: number; 
}

const DeleteEvent: React.FC<DeleteEventProps> = ({ eventId }) => {
  const handleDelete = async () => {
    const confirmation = confirm("Are you sure you want to delete this event?");
    if (!confirmation) return;

    try {
      await client.delete(`/api/events/:${eventId}`);
      alert("Event deleted successfully!");
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("Failed to delete event.");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Delete Event
    </button>
  );
};

export default DeleteEvent;
