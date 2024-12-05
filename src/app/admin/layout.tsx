import AdminHeader from "./adminHeader";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section suppressHydrationWarning>
      <AdminHeader />
      {children}
    </section>
  );
}
