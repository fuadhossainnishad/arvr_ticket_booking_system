import Link from "next/link";
import React from "react";

interface header {
  title: string;
  path: string;
}

const headers: Record<string, header> = {
  home: {
    title: "Home",
    path: "/",
  },
  Events: {
    title: "Events",
    path: "/events",
  },
  CreateEvent: {
    title: "CreateEvent",
    path: "/createEvent",
  },
  EditEvent: {
    title: "EditEvent",
    path: "/editEvent",
  },
  DeleteEvent: {
    title: "DeleteEvent",
    path: "/deleteEvent",
  },
};
export default function Header() {
  return (
    <main
      suppressHydrationWarning
      className="flex flex-row justify-center gap-20 pt-10 text-xl font-semibold font-sans"
    >
      {Object.entries(headers).map(([key, { title, path }]) => (
        <Link key={key} href={path} passHref>
          {title}
        </Link>
      ))}
    </main>
  );
}
