"use client";
import { useSelector } from "react-redux";
import AdminHeader from "./adminHeader";
import { RooteState } from "@/store/store";
import AdminSignIn from "@/components/AdminSignIn";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAdminSignedIn = useSelector(
    (state: RooteState) => state.auth.adminSignIn
  );
  if (!isAdminSignedIn) {
    return <AdminSignIn />;
  }
  return (
    <section suppressHydrationWarning>
      <AdminHeader />
      {children}
    </section>
  );
}
