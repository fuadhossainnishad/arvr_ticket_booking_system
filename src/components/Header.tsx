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
  events: {
    title: "Events",
    path: "/events",
  },
  Contact: {
    title: "Contact",
    path: "/contact",
  },
  About: {
    title: "About",
    path: "/about",
  },
  Enter: {
    title: "MyEvent",
    path: "/myevent",
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
