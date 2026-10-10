"use client";
import { createAuthClient } from "better-auth/client";
import toast, { Toaster } from 'react-hot-toast';
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//   const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const { data, error } = await authClient.signIn.email({
//       email: email,
//       password: password,
//       rememberMe: true,
//       callbackURL: "/",
//     });
//     console.log(data);
//   };



const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const { data, error } = await authClient.signIn.email({
    email: 'email',
    password: 'password',
    rememberMe: true,
    callbackURL: "/",
  });

  if (error) {
    toast.error(error.message || "Sign in failed!");
    return;
  }

  toast.success("Welcome back!");

//   console.log(data);
};


const authClient = createAuthClient();

const signIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });

//  const data = await authClient.signIn.social({
//         provider: "github"
//     })

};





const signInX = async () => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
}



  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50 px-4 pt-16 mt-10">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900">সাইন ইন</h1>
        <p className="mt-1 text-sm text-gray-500">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>

      <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <form className="space-y-4" onSubmit={handleSignIn}>
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

          <button
            type="submit"
            className="w-full rounded-lg bg-green-700 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-green-800"
          >
            সাইন ইন
          </button>
{/* <p>or</p> */}
<div className="flex items-center gap-3 py-2">
  <div className="h-px flex-1 bg-gray-200"></div>
  <p className="text-sm text-gray-400">অথবা</p>
  <div className="h-px flex-1 bg-gray-200"></div>
</div>









<button
      type="button"
      onClick={signIn}
      className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50"
    >
      <svg width="18" height="18" viewBox="0 0 48 48">
        <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z" />
        <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17.5z" />
        <path fill="#FBBC05" d="M10.5 28.7c-.5-1.4-.8-3-.8-4.7s.3-3.2.8-4.7l-7.9-6.1C.9 16.4 0 20.1 0 24s.9 7.6 2.6 10.8l7.9-6.1z" />
        <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.8 2.3-8.4 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z" />
      </svg>
      Google দিয়ে চালিয়ে যান
    </button>
    <button
      type="button"
      onClick={signInX}
      className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.500 11.500 0 0 1 6 0c2.300-1.500 3.300-1.200 3.300-1.200.7 1.700.2 2.900.1 3.200.8.8 1.200 1.900 1.200 3.200 0 4.600-2.800 5.600-5.500 5.900.4.400.8 1.100.8 2.200v3.300c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
      </svg>
      GitHub দিয়ে চালিয়ে যান
    </button>


        </form>

        <p className="mt-5 text-center text-xs text-gray-600">
          অ্যাকাউন্ট নেই?{" "}
          <Link href="/signup" className="font-medium text-green-700 hover:underline">
            সাইন আপ করুন
          </Link>
        </p>
      </div>

      <Link href="/" className="mt-6 text-xs text-gray-400 hover:text-gray-600">
        ← হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default SignIn;