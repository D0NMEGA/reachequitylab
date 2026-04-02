import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Publications | REACH Equity Lab",
};

export default function PublicationsPage() {
  return (
    <main className="py-[84px]">
      <div className="w-[min(780px,100%)] w-[min(1120px,92vw)] mx-auto">
        <FadeIn className="text-center mb-7">
          <h1 className="text-[#1f3a5f] font-bold text-[clamp(2rem,5vw,3.4rem)] leading-tight mt-0">
            Publications
          </h1>
        </FadeIn>

        <FadeIn as="article" className="bg-white border border-[#e2e8f0] rounded-[18px] p-6" delay={0.1}>
          <Badge className="bg-[#eaf4fb] text-[#1f3a5f] font-bold border-transparent">
            Research in Progress
          </Badge>
          <h2 className="text-[#1f3a5f] font-semibold text-[clamp(1.7rem,4vw,2.5rem)] leading-tight mt-4">
            Financial Hardship and Cost-Related Nonadherence to Cardioprotective
            Medications in Cancer Survivors
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
