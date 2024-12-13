"use client";
import { client } from "@/lib/client";
import { useState } from "react";

const signupForm = {
  fullname: "Fuad Hossain",
  email: "fuadhossainbk01@gmail.com",
  mobilenumber: "01627408824",
  password: "Fuad@12345",
};

export default function Signup() {
  const [signup, setSignup] = useState(signupForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    // const userSignUpFormData = new FormData();
    // userSignUpFormData.append("fullname", signup.fullname);
    // userSignUpFormData.append("email", signup.email);
    // userSignUpFormData.append("mobile", signup.mobilenumber);
    // userSignUpFormData.append("password", signup.password);
    // const jsonForm = JSON.stringify(Object.fromEntries(userSignUpFormData));
    // console.log(jsonForm);

    try {
      const response = await client.post("/api/user/signup", signup, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(signup);
      console.log(response.data);
      alert("Signup successful!");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <main
      suppressHydrationWarning
      className="flex items-center justify-center min-h-screen bg-gray-100 py-12 px-6 sm:px-12"
    >
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-8">
          Create Your Account
        </h2>

        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              value={signup.fullname}
              placeholder={signup.fullname}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={signup.email}
              placeholder={signup.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Mobile Number
            </label>
            <input
              type="text"
              name="mobilenumber"
              value={signup.mobilenumber}
              placeholder={signup.mobilenumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={signup.password}
              placeholder={signup.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            suppressHydrationWarning
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center">
          <p suppressHydrationWarning className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-500 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
