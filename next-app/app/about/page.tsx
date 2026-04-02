import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { StaggerContainer } from "@/components/StaggerContainer";
import { StaggerItem } from "@/components/StaggerItem";

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

        <FadeIn as="section" className="text-center mt-9" delay={0.1}>
          <h2 className="text-[#1f3a5f] font-semibold text-[clamp(1.7rem,4vw,2.5rem)] leading-tight mt-0">
            What REACH Means
          </h2>
          <p>Research in Epidemiology Access &amp; Community Health</p>
        </FadeIn>

        <StaggerContainer>
          <StaggerItem>
            <ul className="mt-[18px] pl-6 list-disc grid gap-[18px] text-xl leading-relaxed">
              <li>
                <strong className="font-bold text-[#1f3a5f]">R: Research</strong> — We ground every initiative in
                careful inquiry and evidence-driven analysis. Our studies draw from
                nationally representative datasets to uncover patterns that shape
                health outcomes.
              </li>
              <li>
                <strong className="font-bold text-[#1f3a5f]">E: Epidemiology</strong> — Our work tracks patterns of
                disease and outcomes across populations and systems. We apply
                epidemiologic methods to quantify disparities and identify
                modifiable risk factors.
              </li>
              <li>
                <strong className="font-bold text-[#1f3a5f]">A: Access</strong> — We examine barriers to care,
                affordability, and the pathways people use to seek help.
                Understanding access gaps is essential to designing interventions
                that reach the most affected communities.
              </li>
              <li>
                <strong className="font-bold text-[#1f3a5f]">C: Community</strong> — We elevate community voices and
                align findings with lived experience and local context. Our
                research prioritizes translating evidence into resources that
                communities can act on directly.
              </li>
              <li>
                <strong className="font-bold text-[#1f3a5f]">H: Health</strong> — Our end goal is better, more
                equitable health outcomes through actionable insights. Every
                project is oriented toward practical recommendations for
                clinicians, policymakers, and advocates.
              </li>
            </ul>
          </StaggerItem>
        </StaggerContainer>

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
