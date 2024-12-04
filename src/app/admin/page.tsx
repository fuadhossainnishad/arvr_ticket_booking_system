import AdminLogin from "@/components/adminLogin";
import AdminLayout from "./layout";

export default function AdminHome() {
  return (
    <AdminLayout showHeader={false}>
      <AdminLogin />
    </AdminLayout>
  );
}
