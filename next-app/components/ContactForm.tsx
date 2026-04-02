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

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" required />

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required />

      <label htmlFor="subject">Subject</label>
      <input id="subject" name="subject" type="text" required />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows={6} required />

      <button className="btn" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send"}
      </button>

      {status === "success" && (
        <p
          className="form-confirm"
          style={{
            display: "block",
            borderColor: "#3BA99C",
            color: "#1a6b64",
            background: "#e6f7f5",
          }}
        >
          Thank you — your message has been sent. We will get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p
          className="form-confirm"
          style={{
            display: "block",
            borderColor: "#e74c3c",
            color: "#c0392b",
            background: "#fdf0ef",
          }}
        >
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
