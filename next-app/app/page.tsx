import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { StaggerContainer } from "@/components/StaggerContainer";
import { StaggerItem } from "@/components/StaggerItem";
import { AnimatedText } from "@/components/ui/animated-text";

export default function HomePage() {
  return (
    <main>
      <section className="hero-video">
        <video
          className="hero-video-bg"
          autoPlay
          muted
          loop
          playsInline
          poster="/reach-banner.png"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
        <div className="container hero-video-content">
          <h1>
            <AnimatedText
              text="Where Research Meets Reach"
              delay={0.2}
            />
          </h1>
          <FadeIn delay={0.5} duration={0.5}>
            <p>
              REACH Equity Lab is focused on undergraduate research addressing
              health disparities tied to racial, wage, and healthcare gaps.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-white" href="/publications">
                Explore Our Work
              </Link>
              <Link className="btn btn-outline-white" href="/about">
                Learn More
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <FadeIn className="section-head">
            <h2>Research Focus</h2>
          </FadeIn>
          <StaggerContainer className="cards three-col">
            <StaggerItem>
              <article className="card">
                <h3>Racial Gaps</h3>
                <p>
                  Investigating structural causes and outcomes of racial
                  inequities in access and care quality.
                </p>
              </article>
            </StaggerItem>
            <StaggerItem>
              <article className="card">
                <h3>Wage Gaps</h3>
                <p>
                  Studying how income constraints shape care decisions, treatment
                  adherence, and long-term outcomes.
                </p>
              </article>
            </StaggerItem>
            <StaggerItem>
              <article className="card">
                <h3>Health Gaps</h3>
                <p>
                  Quantifying and communicating disparities in chronic conditions,
                  prevention, and healthcare utilization.
                </p>
              </article>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="section">
        <FadeIn className="container split">
          <div>
            <h2>Current Research</h2>
            <p className="chip">In Progress</p>
            <h3>
              Financial Hardship and Cost-Related Nonadherence to
              Cardioprotective Medications in Cancer Survivors
            </h3>
            <p>
              Our team is investigating financial hardship and medication
              nonadherence among cancer survivors, examining disparities linked
              to race, income, and healthcare access.
            </p>
          </div>
          <aside className="stat-card">
            <p className="stat-label">Current Priority</p>
            <p className="stat-number">In Progress</p>
            <p className="stat-small">
              Equity-focused evidence for actionable policy and community
              impact.
            </p>
          </aside>
        </FadeIn>
      </section>
    </main>
  );
}
