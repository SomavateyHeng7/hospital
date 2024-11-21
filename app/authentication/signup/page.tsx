"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import Link from "next/link"; // Import Link from next/link
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    // Form validation
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Prepare payload
      const payload = { name, email, password, confirmPassword };

      // Make API request to register the user
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || "Failed to register");
        return;
      }

      // After successful registration, redirect to the login page
      router.push("/authentication/login"); // Redirect to login after registration
    } catch (err) {
      setError("Failed to register. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white rounded shadow-md">
        {/* Image Section */}
        <div className="hidden md:block w-1/2 relative">
          <img
            src="/images/logo.png"
            alt="Register"
            className="object-cover w-full h-full rounded-l"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 space-y-8">
          <h1 className="text-2xl font-bold text-center text-[#2b5e9f]">
            Register
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Confirm Password Input */}
            <div className="space-y-2">
              <label htmlFor="confirm-password" className="block text-gray-700">
                Confirm Password
              </label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"
                className="w-full"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-sm text-red-600">{error}</p>}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[#2b5e9f] text-white hover:bg-blue-700"
            >
              Register
            </Button>
          </form>

          {/* Sign In Link */}
          <div className="text-center pt-4">
            <Link
              href="/authentication/login"
              className="text-[#2b5e9f] hover:underline"
            >
              Already have an account? Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
