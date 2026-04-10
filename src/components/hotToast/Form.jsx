import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Form() {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      toast.error("Name is required ❌");
      return;
    }

    // fake API call
    const promise = new Promise((resolve) => {
      setTimeout(() => resolve("Done"), 2000);
    });

    toast.promise(promise, {
      loading: "Saving...",
      success: `${name} Your Name Saved successfully ✅`,
      error: "Something went wrong ❌",
    });

    setName("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-lg space-y-4 w-80"
    >
      <h2 className="text-xl font-bold">User Form</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded-lg"
      />

      <button
        type="submit"
        className="w-full bg-black text-white p-2 rounded-lg"
      >
        Submit
      </button>
    </form>
  );
}