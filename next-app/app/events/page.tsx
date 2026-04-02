import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | REACH Equity Lab",
};

export default function EventsPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="section-head reveal">
          <h1>Events</h1>
          <p>Upcoming conversations, workshops, and presentations.</p>
        </div>

        <div className="cards two-col" id="events-grid">
          <article className="card reveal">
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
        </div>
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
