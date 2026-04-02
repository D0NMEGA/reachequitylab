import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { StaggerContainer } from "@/components/StaggerContainer";
import { StaggerItem } from "@/components/StaggerItem";

export const metadata: Metadata = {
  title: "Events | REACH Equity Lab",
};

export default function EventsPage() {
  return (
    <main className="py-[84px]">
      <div className="w-[min(1120px,92vw)] mx-auto">
        <FadeIn className="text-center mb-7">
          <h1 className="text-[#1f3a5f] font-bold text-[clamp(2rem,5vw,3.4rem)] leading-tight mt-0">
            Events
          </h1>
          <p className="text-[#4a4a4a]">
            Upcoming conversations, workshops, and presentations.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          id="events-grid"
        >
          <StaggerItem>
            <article className="bg-white border border-[#e2e8f0] rounded-2xl p-[22px] shadow-[0_1px_2px_rgba(31,58,95,0.08)]">
              <h3 className="font-medium text-[#2c4a73] leading-tight mt-0">
                Policy Brief Workshop
              </h3>
              <p>
                <strong>Date:</strong> April 11, 2026
              </p>
              <p>
                <strong>Location:</strong> Hybrid
              </p>
              <p>
                Translating research into practical recommendations for
                stakeholders.
              </p>
            </article>
          </StaggerItem>
        </StaggerContainer>

        <div
          className="text-center py-12 px-4 text-[#6b7280]"
          id="events-empty"
          style={{ display: "none" }}
          aria-hidden="true"
        >
          <p>No upcoming events at this time. Check back soon.</p>
        </div>
      </div>
    </main>
  );
}
