'use client'

import { useState } from "react";

const signinform = {
  email: "",
  password: "",
};

export default function Login() {
  const [signin, setSignin] = useState(signinform);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSignin({ ...signin, [name]: value });
  };
  return (
    <main className="flex flex-col">
      <input
        type="email"
        name="email"
        value={signin.email}
        placeholder="Email Address"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="Password"
        value={signin.password}
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <button type="submit"  className="">
        SignIn
      </button>
    </main>
  );
}
