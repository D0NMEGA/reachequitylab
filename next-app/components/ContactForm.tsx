"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-3 py-2.5 rounded-[10px] border border-[#e2e8f0] font-[inherit] focus:outline-none focus:border-[#5fa8d3]";

  return (
    <form className="grid gap-2.5 mt-3.5" onSubmit={handleSubmit}>
      <label className="font-semibold" htmlFor="name">
        Name
      </label>
      <input id="name" name="name" type="text" required className={inputClass} />

      <label className="font-semibold" htmlFor="email">
        Email
      </label>
      <input id="email" name="email" type="email" required className={inputClass} />

      <label className="font-semibold" htmlFor="subject">
        Subject
      </label>
      <input id="subject" name="subject" type="text" required className={inputClass} />

      <label className="font-semibold" htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={6}
        required
        className={inputClass}
      />

      <button
        className="inline-block border border-[#1f3a5f] bg-[#1f3a5f] text-white font-bold rounded-[10px] px-4 py-2.5 cursor-pointer transition-[transform,background-color] duration-[180ms] hover:-translate-y-0.5 hover:bg-[#163047] disabled:opacity-60 disabled:cursor-not-allowed"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send"}
      </button>

      {status === "success" && (
        <p className="mt-3.5 px-[18px] py-3.5 bg-[#e6f7f5] border border-[#3ba99c] rounded-[10px] text-[#1a6b64] font-semibold text-center">
          Thank you — your message has been sent. We will get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="mt-3.5 px-[18px] py-3.5 bg-[#fdf0ef] border border-[#e74c3c] rounded-[10px] text-[#c0392b] font-semibold text-center">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
