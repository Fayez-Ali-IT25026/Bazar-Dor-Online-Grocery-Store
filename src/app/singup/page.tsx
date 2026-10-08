"use client";

import React, { useState } from "react";
import Link from "next/link";
import { authClient } from "../../lib/auth-client";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handle sign-up form submission

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    const { data, error } = await authClient.signUp.email(
      {
        name: name,
        email: email,
        password: password,
        callbackURL: "/", 
      },
      {
        onRequest: (ctx) => {
          console.log("Sign-up request initiated", ctx); 
        },
        onSuccess: (ctx) => {
          console.log("Sign-up successful", ctx);
          
        },
        onError: (ctx) => {
          console.log("Sign-up error", ctx);
          
          alert(ctx.error.message);
        },
      }
    );
    console.log(data);
  };

  // Render the sign-up form ekenteke suro better auth fuction upore

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50 px-4 pt-12">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900">অ্যাকাউন্ট তৈরি করুন</h1>
        <p className="mt-1 text-sm text-gray-500">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>

      <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <form className="space-y-4" onSubmit={handleSignUp}>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              নাম
            </label>
            <input
              type="text"
              placeholder="যেমন: রহিম উদ্দিন"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              ইমেইল
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              পাসওয়ার্ড
            </label>
            <input
              type="password"
              placeholder="কমপক্ষে ৮ অক্ষর"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              পাসওয়ার্ড নিশ্চিত করুন
            </label>
            <input
              type="password"
              placeholder="আবার লিখুন"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-green-700 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-green-800"
          >
            অ্যাকাউন্ট তৈরি করুন
          </button>
        </form>

        <p className="mt-5 text-center text-xs text-gray-600">
          অ্যাকাউন্ট আছে?{" "}
          <Link href="/signin" className="font-medium text-green-700 hover:underline">
            সাইন ইন করুন
          </Link>
        </p>
      </div>

      <Link href="/" className="mt-6 text-xs text-gray-400 hover:text-gray-600">
        ← হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default SignUp;