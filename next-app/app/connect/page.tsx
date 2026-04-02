import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Connect | REACH Equity Lab",
};

export default function ConnectPage() {
  return (
    <main className="py-[84px]">
      <div className="w-[min(780px,100%)] w-[min(1120px,92vw)] mx-auto">
        <FadeIn className="text-center mb-7">
          <h1 className="text-[#1f3a5f] font-bold text-[clamp(2rem,5vw,3.4rem)] leading-tight mt-0">
            Connect With Us
          </h1>
          <p className="text-[#4a4a4a]">
            We welcome collaboration opportunities, questions, and media
            inquiries.
          </p>
        </FadeIn>

        <FadeIn
          as="section"
          className="bg-white border border-[#e2e8f0] rounded-2xl px-8 py-7 mb-6"
          delay={0.1}
        >
          <h2 className="text-[#1f3a5f] font-semibold text-[1.35rem] leading-tight mt-0 mb-1.5">
            General Inquiries
          </h2>
          <p className="text-[#4a4a4a] mb-[18px]">
            For questions about our research, partnership opportunities, or
            media requests, reach out directly.
          </p>
          <div className="flex items-baseline gap-3 py-2.5 border-t border-[#e2e8f0]">
            <span className="font-bold text-[#1f3a5f] min-w-[120px] shrink-0">
              Email
            </span>
            <a href="mailto:reachequitylab@gmail.com" className="text-[#5fa8d3] hover:text-[#3ba99c]">
              reachequitylab@gmail.com
            </a>
          </div>
          <div className="flex items-baseline gap-3 py-2.5 border-t border-[#e2e8f0]">
            <span className="font-bold text-[#1f3a5f] min-w-[120px] shrink-0">
              Response Time
            </span>
            <span>We typically respond within 2-3 business days.</span>
          </div>
        </FadeIn>

        <FadeIn
          as="section"
          className="bg-white border border-[#e2e8f0] rounded-2xl px-8 py-7 mb-6"
          delay={0.2}
        >
          <h2 className="text-[#1f3a5f] font-semibold text-[1.35rem] leading-tight mt-0 mb-1.5">
            Follow Our Work
          </h2>
          <p className="text-[#4a4a4a] mb-[18px]">
            Stay updated on publications, events, and opportunities through our
            social channels.
          </p>
          <div className="grid gap-3.5">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 no-underline p-3.5 border border-[#e2e8f0] rounded-xl transition-[border-color,transform] duration-200 hover:border-[#3ba99c] hover:-translate-y-0.5"
            >
              <span className="w-11 h-11 grid place-items-center rounded-[10px] bg-[#eaf4fb] text-[#1f3a5f] font-extrabold text-[1.1rem] shrink-0">
                in
              </span>
              <div className="flex flex-col">
                <strong className="text-[#1f3a5f] text-base">LinkedIn</strong>
                <span className="text-[#6f7c8a] text-[0.88rem]">
                  Professional updates &amp; publications
                </span>
              </div>
            </a>
          </div>
        </FadeIn>

        <FadeIn
          as="section"
          className="bg-white border border-[#e2e8f0] rounded-2xl px-8 py-7 mb-6"
          delay={0.3}
        >
          <h2 className="text-[#1f3a5f] font-semibold text-[1.35rem] leading-tight mt-0 mb-1.5">
            Send a Message
          </h2>
          <p className="text-[#4a4a4a] mb-[18px]">
            For detailed inquiries, use our contact form to send us a message
            directly.
          </p>
          <Link
            className="inline-block border border-[#1f3a5f] bg-[#1f3a5f] text-white no-underline font-bold rounded-[10px] px-4 py-2.5 transition-[transform,background-color] duration-[180ms] hover:-translate-y-0.5 hover:bg-[#163047]"
            href="/contact"
          >
            Open Contact Form &rarr;
          </Link>
        </FadeIn>
      </div>
    </main>
  );
}
