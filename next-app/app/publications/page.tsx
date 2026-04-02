import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Publications | REACH Equity Lab",
  description:
    "Research publications and in-progress studies from REACH Equity Lab on health disparities and equity.",
  openGraph: {
    title: "Publications | REACH Equity Lab",
    description:
      "Research publications and in-progress studies from REACH Equity Lab on health disparities and equity.",
    url: "https://reachequitylab.org/publications",
    type: "website",
    images: [{ url: "/reach-banner.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Publications | REACH Equity Lab",
    description:
      "Research publications and in-progress studies from REACH Equity Lab on health disparities and equity.",
    images: ["/reach-banner.png"],
  },
};

export default function PublicationsPage() {
  return (
    <main className="py-[84px]">
      <div className="w-[min(780px,100%)] w-[min(1120px,92vw)] mx-auto px-4">
        <FadeIn className="text-center mb-10">
          <h1 className="text-[#1f3a5f] font-bold text-[clamp(2rem,5vw,3.4rem)] leading-tight mt-0">
            Publications
          </h1>
        </FadeIn>

        {/* Empty state */}
        <FadeIn className="flex flex-col items-center text-center py-12 px-6 mb-10 bg-[#f8fbff] border border-[#dce9f7] rounded-2xl" delay={0.08}>
          {/* Document SVG illustration */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3ba99c"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mb-5 opacity-80"
            aria-hidden="true"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>

          <h2 className="text-[#1f3a5f] font-semibold text-[1.4rem] leading-tight mt-0 mb-2">
            No publications yet
          </h2>
          <p className="text-[#4a4a4a] max-w-[42ch] leading-relaxed mb-6">
            Our first paper is currently under development. Follow us on LinkedIn
            to be notified when research is published.
          </p>
          <a
            href="https://www.linkedin.com/company/reach-equity-lab/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#1f3a5f] text-white font-semibold no-underline rounded-[10px] px-5 py-2.5 transition-[transform,background-color] duration-[180ms] hover:-translate-y-0.5 hover:bg-[#2c4a73]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Follow on LinkedIn
          </a>
        </FadeIn>

        {/* Research in Progress teaser card */}
        <FadeIn as="article" className="bg-white border border-[#e2e8f0] rounded-[18px] p-6" delay={0.18}>
          <Badge className="bg-[#eaf4fb] text-[#1f3a5f] font-bold border-transparent">
            Research in Progress
          </Badge>
          <h2 className="text-[#1f3a5f] font-semibold text-[clamp(1.4rem,3.5vw,2rem)] leading-tight mt-4 mb-3">
            Financial Hardship and Cost-Related Nonadherence to Cardioprotective
            Medications in Cancer Survivors
          </h2>
          <p className="text-[#4a4a4a] leading-relaxed mb-4">
            This research is currently in progress. Our team is investigating
            financial hardship and its relationship to medication nonadherence
            among cancer survivors, with a focus on disparities linked to race,
            income, and healthcare access.
          </p>
          <ul className="text-[#4a4a4a] pl-5 grid gap-2 m-0">
            <li>
              <strong className="text-[#2c4a73]">Focus:</strong> Financial hardship, medication nonadherence, and cancer survivorship
            </li>
            <li>
              <strong className="text-[#2c4a73]">Approach:</strong> Quantitative analysis of cost-related nonadherence patterns
            </li>
            <li>
              <strong className="text-[#2c4a73]">Goal:</strong> Evidence for equity-focused policy and intervention design
            </li>
          </ul>
        </FadeIn>
      </div>
    </main>
  );
}
