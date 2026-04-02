import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Publications | REACH Equity Lab",
};

export default function PublicationsPage() {
  return (
    <main className="section">
      <div className="container narrow">
        <FadeIn className="section-head">
          <h1>Publications</h1>
        </FadeIn>

        <FadeIn as="article" className="paper-card" delay={0.1}>
          <p className="chip">Research in Progress</p>
          <h2>
            Financial Hardship and Cost-Related Nonadherence to
            Cardioprotective Medications in Cancer Survivors
          </h2>
          <p>
            This research is currently in progress. Our team is investigating
            financial hardship and its relationship to medication nonadherence
            among cancer survivors, with a focus on disparities linked to race,
            income, and healthcare access.
          </p>
          <ul>
            <li>
              Focus: Financial hardship, medication nonadherence, and cancer
              survivorship
            </li>
            <li>
              Approach: Quantitative analysis of cost-related nonadherence
              patterns
            </li>
            <li>
              Goal: Evidence for equity-focused policy and intervention design
            </li>
          </ul>
        </FadeIn>
      </div>
    </main>
  );
}
