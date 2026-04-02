import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Connect | REACH Equity Lab",
};

export default function ConnectPage() {
  return (
    <main className="section">
      <div className="container narrow">
        <div className="section-head reveal">
          <h1>Connect With Us</h1>
          <p>
            We welcome collaboration opportunities, questions, and media
            inquiries.
          </p>
        </div>

        <section className="connect-block reveal">
          <h2>General Inquiries</h2>
          <p>
            For questions about our research, partnership opportunities, or
            media requests, reach out directly.
          </p>
          <div className="connect-detail">
            <span className="connect-label">Email</span>
            <a href="mailto:reachequitylab@gmail.com">
              reachequitylab@gmail.com
            </a>
          </div>
          <div className="connect-detail">
            <span className="connect-label">Response Time</span>
            <span>We typically respond within 2-3 business days.</span>
          </div>
        </section>

        <section className="connect-block reveal">
          <h2>Follow Our Work</h2>
          <p>
            Stay updated on publications, events, and opportunities through our
            social channels.
          </p>
          <div className="connect-social-grid">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="connect-social-link"
            >
              <span className="connect-social-icon">in</span>
              <div>
                <strong>LinkedIn</strong>
                <span>Professional updates &amp; publications</span>
              </div>
            </a>
          </div>
        </section>

        <section className="connect-block reveal">
          <h2>Send a Message</h2>
          <p>
            For detailed inquiries, use our contact form to send us a message
            directly.
          </p>
          <Link className="btn" href="/contact">
            Open Contact Form &rarr;
          </Link>
        </section>
      </div>
    </main>
  );
}
