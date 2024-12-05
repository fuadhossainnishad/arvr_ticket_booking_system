"use client";
import { client } from "@/lib/client";
import { adminSignIn } from "@/store/slices/authSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

// interface signIn {
//   onSignIn: () => void;
// }

export default function AdminSignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
const dispatch=useDispatch()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    const adminFormData = new FormData();
    adminFormData.append("email", formData.email);
    adminFormData.append("password", formData.password);
    try {
      const response = await client.post('/api/signin/admin',adminFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      if(response.status === 200){
        dispatch(adminSignIn());
      }
      console.log(response.data);
      alert("Signin successful!");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <main
      suppressHydrationWarning
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
    >
      <form
        suppressContentEditableWarning
        onSubmit={handleSignin}
        className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg"
      >
        <h1 className="mb-6 text-3xl font-semibold text-center text-gray-700">
          Admin SignIn
        </h1>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Admin Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 text-gray-700 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
           Admin Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter your password"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 text-gray-700 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Sign In
        </button>
      </form>
    </main>
  );
}
