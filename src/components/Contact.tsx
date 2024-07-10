"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Experiencia } from "./svg/title-icons";

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
    <div className="flex flex-col items-center justify-evenly  w-full h-full">
      <div className="flex flex-col items-center justify-center py-2">
        <div className="flex items-center justify-center gap-1">
          <Experiencia color="#47FA92" />
          <h3 className="text-[#717071]">Contactame! </h3>
        </div>
        <p className="text-[#c3bdbd] font-semibold text-lg text-center">
          Trabajemos juntos
        </p>
      </div>
      <div className=" w-full h-[1px] bg-[#202020] "></div>

      <form
        onSubmit={handleSubmit}
        className="p-3 rounded-lg shadow-lg w-full max-w-md"
      >
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
          className="w-full p-2 rounded-xl bg-green-400  hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 border-4 border-black-400 text-color-border transition-colors duration-300 font-medium "
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
