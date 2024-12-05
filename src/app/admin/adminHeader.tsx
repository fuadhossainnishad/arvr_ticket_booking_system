import Link from "next/link";
import React from "react";

interface header {
  title: string;
  path: string;
}

const headers: Record<string, header> = {
  home: {
    title: "Dashboard",
    path: "/admin",
  },
  Events: {
    title: "Events",
    path: "/admin/Events",
  },
  CreateEvent: {
    title: "CreateEvent",
    path: "/admin/CreateEvent",
  },
  EditEvent: {
    title: "EditEvent",
    path: "/admin/EditEvent",
  },
  DeleteEvent: {
    title: "DeleteEvent",
    path: "/admin/DeleteEvent",
  },
};
export default function AdminHeader() {
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
