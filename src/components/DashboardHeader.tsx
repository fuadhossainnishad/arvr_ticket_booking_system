// components/DashboardHeader.tsx
import Link from "next/link";
import { useRouter } from "next/router";

export default function DashboardHeader() {
  const router = useRouter();

  const getLinkClassName = (path: string) => {
    return router.pathname === path
      ? "text-lg font-semibold text-blue-500 border-b-2 border-blue-500"
      : "text-lg text-white hover:text-blue-400 transition-all";
  };

  return (
    <header className="bg-gray-800 text-white p-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-semibold tracking-tight">Event Dashboard</h1>
        <nav className="flex space-x-8 md:space-x-4 sm:space-x-2 sm:flex-col sm:space-y-4 sm:items-center">
          <Link href="/create-event">
            <a className={getLinkClassName("/create-event")}>Create Event</a>
          </Link>
          <Link href="/edit-event">
            <a className={getLinkClassName("/edit-event")}>Edit Event</a>
          </Link>
          <Link href="/delete-event">
            <a className={getLinkClassName("/delete-event")}>Delete Event</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
