import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { StaggerContainer } from "@/components/StaggerContainer";
import { StaggerItem } from "@/components/StaggerItem";
import { ReachAccordion } from "@/components/ReachAccordion";

export const metadata: Metadata = {
  title: "About Us | REACH Equity Lab",
};

export default function AboutPage() {
  return (
    <main className="py-[84px]">
      <div className="w-[min(780px,100%)] mx-auto w-[min(1120px,92vw)]">
        <FadeIn>
          <h1 className="text-[#1f3a5f] font-bold text-[clamp(2rem,5vw,3.4rem)] leading-tight mt-0">
            About Us
          </h1>
          <p>
            REACH Equity Lab is an undergraduate-driven research initiative
            focused on health disparities across racial, wage, and healthcare
            access gaps. Our work combines rigorous analysis with practical,
            equity-centered policy and community recommendations.
          </p>
          <p>
            We train student researchers to investigate complex public health
            challenges and communicate findings in ways that support action among
            institutions, policymakers, and community partners.
          </p>
        </FadeIn>

        {/* Founding narrative */}
        <FadeIn className="mt-8" delay={0.08}>
          <h2 className="text-[#1f3a5f] font-semibold text-[clamp(1.4rem,3.5vw,2rem)] leading-tight mt-0 mb-3">
            Our Story
          </h2>
          <p className="text-[#4a4a4a] leading-relaxed">
            REACH Equity Lab was founded in 2025 by undergraduate researchers at The
            University of Texas at Austin who recognized a gap in student-led health
            disparities research. We believe that rigorous, equity-centered analysis
            should be accessible to undergraduate scholars — not reserved for graduate
            programs.
          </p>
        </FadeIn>

        {/* UT Austin affiliation */}
        <FadeIn className="mt-6 flex items-center gap-3 bg-[#f8fbff] border border-[#dce9f7] rounded-xl px-5 py-4" delay={0.14}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#bf5700"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="shrink-0"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <div>
            <p className="m-0 font-semibold text-[#bf5700] text-[0.95rem]">
              The University of Texas at Austin
            </p>
            <p className="m-0 text-[#4a4a4a] text-[0.85rem]">
              Undergraduate research initiative — Austin, TX
            </p>
          </div>
        </FadeIn>

        {/* Stats row */}
        <StaggerContainer
          staggerDelay={0.1}
          className="mt-8 grid grid-cols-3 gap-4 text-center"
        >
          {[
            { value: "7", label: "Researchers" },
            { value: "1", label: "Paper in Progress" },
            { value: "2025", label: "Year Founded" },
          ].map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="bg-[#1f3a5f] rounded-2xl py-6 px-4">
                <p className="m-0 text-white text-[2.2rem] font-extrabold leading-none">
                  {stat.value}
                </p>
                <p className="m-0 text-white/80 text-[0.85rem] mt-1.5 font-medium">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn as="section" className="text-center mt-9" delay={0.1}>
          <h2 className="text-[#1f3a5f] font-semibold text-[clamp(1.7rem,4vw,2.5rem)] leading-tight mt-0">
            What REACH Means
          </h2>
          <p>Research in Epidemiology Access &amp; Community Health</p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <ReachAccordion />
        </FadeIn>

        <StaggerContainer className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-[18px]">
          <StaggerItem>
            <article className="bg-white border border-[#e2e8f0] rounded-2xl p-[22px] shadow-[0_1px_2px_rgba(31,58,95,0.08)]">
              <h3 className="font-medium text-[#2c4a73] leading-tight mt-0">
                Mission
              </h3>
              <p>
                Advance equity by producing clear, data-informed research on
                disparities that shape health outcomes.
              </p>
            </article>
          </StaggerItem>
          <StaggerItem>
            <article className="bg-white border border-[#e2e8f0] rounded-2xl p-[22px] shadow-[0_1px_2px_rgba(31,58,95,0.08)]">
              <h3 className="font-medium text-[#2c4a73] leading-tight mt-0">
                Approach
              </h3>
              <p>
                Undergraduate collaboration, applied methods, and transparent
                communication of real-world implications.
              </p>
            </article>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </main>
  );
}
