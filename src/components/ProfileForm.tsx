"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

const ProfileForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await authClient.updateUser({
      name: name,
    });

    if (error) {
      alert("Failed to update name!");
    } else {
      alert("Name updated successfully!");
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Full Name
        </label>

        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          className="w-full border border-gray-300 rounded-lg px-4 py-3"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg"
      >
        Update Name
      </button>
    </form>
  );
};

export default ProfileForm;