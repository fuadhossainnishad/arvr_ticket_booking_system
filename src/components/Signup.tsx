'use client'

import { auth } from "@/service/authService";
import { useState } from "react";

const signupform = {
  fullname: "",
  email: "",
  mobile: "",
  password: "",
};

export default function Signup() {
  const [signup, setSignup] = useState(signupform);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };

  const handleSignup=async (e:React.FormEvent)=>{
    e.preventDefault()
    const response=await auth('/student', signup)
    console.log(response.message);
    

  }
  return (
    <main className="flex flex-col">
      <input
        type="text"
        name="fullname"
        value={signup.fullname}
        placeholder="Full Name"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        value={signup.email}
        placeholder="Email Address"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="mobile"
        value={signup.mobile}
        placeholder="Mobile Number"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        value={signup.password}
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <button type="submit" onClick={handleSignup}  className="">
        SignUp
      </button>
    </main>
  );
}
