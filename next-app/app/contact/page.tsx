import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | REACH Equity Lab",
};

export default function ContactPage() {
  return (
    <main className="section">
      <div className="container form-centered">
        <section className="card reveal">
          <h1>Contact Us</h1>
          <p>Send us an email using the form below.</p>
          <ContactForm />
        </section>
      </div>
    </main>
  );
}
