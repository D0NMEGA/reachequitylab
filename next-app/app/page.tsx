import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { StaggerContainer } from "@/components/StaggerContainer";
import { StaggerItem } from "@/components/StaggerItem";
import { AnimatedText } from "@/components/ui/animated-text";

export default function HomePage() {
  return (
    <main>
      {/* Hero video section */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          poster="/reach-banner.png"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(160deg, rgba(28,167,166,0.82) 0%, rgba(31,58,95,0.88) 100%)",
          }}
        />
        <div className="relative z-[2] max-w-[680px] py-16 w-[min(1120px,92vw)] mx-auto">
          <h1 className="text-white text-[clamp(2.2rem,5vw,3.6rem)] font-bold leading-tight mb-4 mt-0">
            <AnimatedText text="Where Research Meets Reach" delay={0.2} />
          </h1>
          <FadeIn delay={0.5} duration={0.5}>
            <p className="text-white/90 text-[1.15rem] max-w-[56ch] leading-[1.7]">
              REACH Equity Lab is focused on undergraduate research addressing
              health disparities tied to racial, wage, and healthcare gaps.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              <Link
                className="inline-block bg-white text-[#1f3a5f] border border-white font-bold no-underline rounded-[10px] px-4 py-2.5 transition-[transform,background-color] duration-[180ms] hover:-translate-y-0.5 hover:bg-[#eaf4fb]"
                href="/publications"
              >
                Explore Our Work
              </Link>
              <Link
                className="inline-block bg-transparent text-white border border-white font-bold no-underline rounded-[10px] px-4 py-2.5 transition-[transform,background-color] duration-[180ms] hover:-translate-y-0.5 hover:bg-white/15"
                href="/about"
              >
                Learn More
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Research Focus */}
      <section className="py-[84px] bg-[#eaf4fb]">
        <div className="w-[min(1120px,92vw)] mx-auto">
          <FadeIn className="text-center mb-7">
            <h2 className="text-[#1f3a5f] font-semibold text-[clamp(1.7rem,4vw,2.5rem)] leading-tight mt-0">
              Research Focus
            </h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <StaggerItem>
              <article className="bg-white border border-[#e2e8f0] rounded-2xl p-[22px] shadow-[0_1px_2px_rgba(31,58,95,0.08)]">
                <h3 className="font-medium text-[#2c4a73] leading-tight mt-0">
                  Racial Gaps
                </h3>
                <p>
                  Investigating structural causes and outcomes of racial
                  inequities in access and care quality.
                </p>
              </article>
            </StaggerItem>
            <StaggerItem>
              <article className="bg-white border border-[#e2e8f0] rounded-2xl p-[22px] shadow-[0_1px_2px_rgba(31,58,95,0.08)]">
                <h3 className="font-medium text-[#2c4a73] leading-tight mt-0">
                  Wage Gaps
                </h3>
                <p>
                  Studying how income constraints shape care decisions, treatment
                  adherence, and long-term outcomes.
                </p>
              </article>
            </StaggerItem>
            <StaggerItem>
              <article className="bg-white border border-[#e2e8f0] rounded-2xl p-[22px] shadow-[0_1px_2px_rgba(31,58,95,0.08)]">
                <h3 className="font-medium text-[#2c4a73] leading-tight mt-0">
                  Health Gaps
                </h3>
                <p>
                  Quantifying and communicating disparities in chronic conditions,
                  prevention, and healthcare utilization.
                </p>
              </article>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Current Research */}
      <section className="py-[84px]">
        <FadeIn className="w-[min(1120px,92vw)] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 items-start">
          <div>
            <h2 className="text-[#1f3a5f] font-semibold text-[clamp(1.7rem,4vw,2.5rem)] leading-tight mt-0">
              Current Research
            </h2>
            <p className="inline-block bg-[#eaf4fb] text-[#1f3a5f] rounded-full px-3 py-1 font-bold text-sm">
              In Progress
            </p>
            <h3 className="font-medium text-[#2c4a73] leading-tight">
              Financial Hardship and Cost-Related Nonadherence to Cardioprotective
              Medications in Cancer Survivors
            </h3>
            <p>
              Our team is investigating financial hardship and medication
              nonadherence among cancer survivors, examining disparities linked
              to race, income, and healthcare access.
            </p>
          </div>
          <aside
            className="rounded-2xl text-white p-6"
            style={{
              background: "linear-gradient(135deg, #1f3a5f 0%, #3ba99c 100%)",
            }}
          >
            <p className="opacity-85 m-0 font-semibold uppercase tracking-[0.06em] text-[0.85rem] text-white">
              Current Priority
            </p>
            <p className="my-2.5 text-[2.2rem] font-extrabold text-white">
              In Progress
            </p>
            <p className="m-0 opacity-[0.92] text-white">
              Equity-focused evidence for actionable policy and community impact.
            </p>
          </aside>
        </FadeIn>
      </section>
    </main>
  );
}
