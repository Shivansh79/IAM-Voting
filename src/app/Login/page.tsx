"use client";

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebaseconfig';
import Link from 'next/link';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = ("/Landing");
    } catch (err) {
      setError('Failed to login'); // Replace with a specific error message if desired
    }
  };

  // Placeholder methods for other login methods
  const handleOTPLogin = () => {
    console.log("OTP login initiated");
    // Implement OTP login logic here
  };

  const handleBiometricLogin = () => {
    console.log("Biometric login initiated");
    // Implement biometric login logic here
  };

  const handleFacialRecognitionLogin = () => {
    console.log("Facial recognition login initiated");
    // Implement facial recognition login logic here
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <img src="/logo shivansh.png" alt="Your Brand Logo" className="mx-auto w-24 h-24 mb-2" />
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-500">Login to your account</p>
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-between items-center">
            <a href="#" className="text-sm text-green-600 hover:underline">Forgot Password?</a>
            <a href="/register" className="text-sm text-green-600 hover:underline">Register</a>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300 transform hover:-translate-y-1"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-gray-500">Or login with:</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="/Login/OtpLogin">
            <button
              className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition"
              onClick={handleOTPLogin}
            >
              OTP
            </button>
            </Link>
            <button
              className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition"
              onClick={handleBiometricLogin}
            >
              Biometric
            </button>
            <button
              className="bg-purple-500 text-white p-3 rounded-full hover:bg-purple-600 transition"
              onClick={handleFacialRecognitionLogin}
            >
              Facial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
