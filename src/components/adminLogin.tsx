"use client";
import { auth } from "@/service/authService";
import { useState } from "react";

const signinForm = {
  email: "",
  password: "",
};

export default function AdminLogin() {
  const [signin, setSignin] = useState(signinForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignin({ ...signin, [name]: value });
  };

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await auth("/adminsignin", signin);
      console.log(response.message);
      alert("Signin successful!");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <main className="flex flex-col">
      <input
        type="email"
        name="email"
        value={signin.email}
        placeholder="Admin Email Address"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        value={signin.password}
        placeholder="Admin Password"
        onChange={handleChange}
        required
      />
      <button type="submit" onClick={handleSignin} className="">
        SignIn
      </button>
    </main>
  );
}
