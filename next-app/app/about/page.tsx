import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { StaggerContainer } from "@/components/StaggerContainer";
import { StaggerItem } from "@/components/StaggerItem";

export const metadata: Metadata = {
  title: "About Us | REACH Equity Lab",
};

export default function AboutPage() {
  return (
    <main className="section">
      <div className="container narrow">
        <FadeIn>
          <h1>About Us</h1>
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

        <FadeIn as="section" className="section-head" delay={0.1}>
          <h2>What REACH Means</h2>
          <p>Research in Epidemiology Access &amp; Community Health</p>
        </FadeIn>

        <StaggerContainer>
          <StaggerItem>
            <ul className="acronym-list">
              <li>
                <strong>R: Research</strong> — We ground every initiative in
                careful inquiry and evidence-driven analysis. Our studies draw from
                nationally representative datasets to uncover patterns that shape
                health outcomes.
              </li>
              <li>
                <strong>E: Epidemiology</strong> — Our work tracks patterns of
                disease and outcomes across populations and systems. We apply
                epidemiologic methods to quantify disparities and identify
                modifiable risk factors.
              </li>
              <li>
                <strong>A: Access</strong> — We examine barriers to care,
                affordability, and the pathways people use to seek help.
                Understanding access gaps is essential to designing interventions
                that reach the most affected communities.
              </li>
              <li>
                <strong>C: Community</strong> — We elevate community voices and
                align findings with lived experience and local context. Our
                research prioritizes translating evidence into resources that
                communities can act on directly.
              </li>
              <li>
                <strong>H: Health</strong> — Our end goal is better, more
                equitable health outcomes through actionable insights. Every
                project is oriented toward practical recommendations for
                clinicians, policymakers, and advocates.
              </li>
            </ul>
          </StaggerItem>
        </StaggerContainer>

        <StaggerContainer className="mini-grid">
          <StaggerItem>
            <article className="card">
              <h3>Mission</h3>
              <p>
                Advance equity by producing clear, data-informed research on
                disparities that shape health outcomes.
              </p>
            </article>
          </StaggerItem>
          <StaggerItem>
            <article className="card">
              <h3>Approach</h3>
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
