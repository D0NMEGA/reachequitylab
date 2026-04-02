import Link from "next/link";

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
        <div className="container hero-video-content reveal">
          <h1>Where Research Meets Reach</h1>
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
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <div className="section-head reveal">
            <h2>Research Focus</h2>
          </div>
          <div className="cards three-col">
            <article className="card reveal">
              <h3>Racial Gaps</h3>
              <p>
                Investigating structural causes and outcomes of racial
                inequities in access and care quality.
              </p>
            </article>
            <article className="card reveal">
              <h3>Wage Gaps</h3>
              <p>
                Studying how income constraints shape care decisions, treatment
                adherence, and long-term outcomes.
              </p>
            </article>
            <article className="card reveal">
              <h3>Health Gaps</h3>
              <p>
                Quantifying and communicating disparities in chronic conditions,
                prevention, and healthcare utilization.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split reveal">
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
        </div>
      </section>
    </main>
  );
}
