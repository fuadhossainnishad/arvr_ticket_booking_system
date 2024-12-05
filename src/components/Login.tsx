"use client";
import { auth } from "@/service/authService";
import Link from "next/link";
import { useState } from "react";


const signinForm = {
  email: "",
  password: "",
};

export default function UserSignIn() {
  const [signin, setSignin] = useState(signinForm);
  const [isAdmin, setIsAdmin] = useState(false); // State to toggle between User and Admin

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignin({ ...signin, [name]: value });
  };

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await auth(isAdmin ? "/admin-signin" : "/signin", signin);
      console.log(response.message);
      alert("Signin successful!");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <main suppressHydrationWarning className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Buttons to switch between user and admin login */}
      <div className="mb-6">
        <button
          onClick={() => setIsAdmin(false)}
          className={`mr-4 px-6 py-3 text-lg ${!isAdmin ? "bg-blue-500" : "bg-gray-300"} text-white rounded-lg focus:outline-none`}
        >
          User Login
        </button>
        <button
          onClick={() => setIsAdmin(true)}
          className={`px-6 py-3 text-lg ${isAdmin ? "bg-blue-500" : "bg-gray-300"} text-white rounded-lg focus:outline-none`}
        >
          Admin Login
        </button>
      </div>

      {/* Login form */}
      <form suppressContentEditableWarning
        onSubmit={handleSignin}
        className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg"
      >
        <h1 className="mb-6 text-3xl font-semibold text-center text-gray-700">
          {isAdmin ? "Admin Login" : "User Login"}
        </h1>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={signin.email}
            placeholder="Enter your email"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 text-gray-700 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={signin.password}
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
        
        {/* Sign Up Link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            {isAdmin ? "Not an admin?" : "Don't have an account?"}{" "}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
}
