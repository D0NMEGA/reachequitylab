import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Contact Us | REACH Equity Lab",
};

export default function ContactPage() {
  return (
    <main className="py-[84px]">
      <div className="flex justify-center w-[min(1120px,92vw)] mx-auto">
        <FadeIn className="bg-white border border-[#e2e8f0] rounded-2xl p-[22px] shadow-[0_1px_2px_rgba(31,58,95,0.08)] w-[min(720px,100%)]">
          <h1 className="text-[#1f3a5f] font-bold text-[clamp(2rem,5vw,3.4rem)] leading-tight mt-0">
            Contact Us
          </h1>
          <p>Send us an email using the form below.</p>
          <ContactForm />
        </FadeIn>
      </div>
    </main>
  );
}
