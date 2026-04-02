import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { StaggerContainer } from "@/components/StaggerContainer";
import { StaggerItem } from "@/components/StaggerItem";

export const metadata: Metadata = {
  title: "Events | REACH Equity Lab",
};

export default function EventsPage() {
  return (
    <main className="section">
      <div className="container">
        <FadeIn className="section-head">
          <h1>Events</h1>
          <p>Upcoming conversations, workshops, and presentations.</p>
        </FadeIn>

        <StaggerContainer className="cards two-col" id="events-grid">
          <StaggerItem>
            <article className="card">
              <h3>Policy Brief Workshop</h3>
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
          className="events-empty-state"
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
