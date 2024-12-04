import AdminHome from "./page";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <AdminHome />
      {children}
    </section>
  );
}
