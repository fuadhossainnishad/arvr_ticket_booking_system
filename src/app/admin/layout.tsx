import AdminHeader from "./adminHeader";

export default function AdminLayout({
  children,
  showHeader = true,
}: {
  children: React.ReactNode;
  showHeader?: boolean;
}) {
  return (
    <section suppressHydrationWarning>
      {showHeader && <AdminHeader />}
      {children}
    </section>
  );
}
