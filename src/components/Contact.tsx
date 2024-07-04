"use client";

import { useState, ChangeEvent, FormEvent } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({ to: "", subject: "", text: "" });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("Sending...");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);

      if (result.id) {
        setStatus("Email sent successfully!");
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <form
        onSubmit={handleSubmit}
        className="p-3 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-white">Contacto</h2>
        <input
          type="email"
          name="to"
          placeholder="Email..."
          className="w-full p-2 mb-4 rounded bg-[#202020] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={formData.to}
          onChange={handleChange}
          required
        />
        <textarea
          name="text"
          placeholder="Mensaje..."
          className="w-full p-2 mb-4 rounded bg-[#202020] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={formData.text}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full p-2 rounded-xl bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 border-4 border-black-400"
          disabled={isLoading}
        >
          {isLoading ? "Enviando..." : "Enviar"}
        </button>
        {status && (
          <p
            className={`mt-4 text-center ${
              status.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
};
