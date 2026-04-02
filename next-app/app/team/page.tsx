"use client";

const teamMembers = [
  {
    name: "Vibhu Kanna",
    title: "Founder & President",
    photo: "/headshots/team/Vibhu-Kanna.jpg",
    linkedin: "https://www.linkedin.com/in/vibhu-kanna-63a05b25a/",
  },
  {
    name: "Donovan Santine",
    title: "Co-Founder",
    photo: "/headshots/team/Donovan-Santine.jpg",
    linkedin: "https://www.linkedin.com/in/donovan-santine/",
  },
  {
    name: "Karthik Peravali",
    title: "Co-Founder",
    photo: "/headshots/team/Karthik-Peravali.jpg",
    linkedin: "https://www.linkedin.com/in/karthik-peravali-662917248/",
  },
  {
    name: "Aryan Roghani",
    title: "Researcher",
    photo: "/headshots/team/Aryan-Kia-Roghani.jpeg",
    linkedin: "https://www.linkedin.com/in/aryankiaroghani/",
  },
  {
    name: "Arjun Jaana",
    title: "Researcher",
    photo: "/headshots/team/Arjun-Jaana.jpg",
    linkedin: "https://www.linkedin.com/in/arjun-jaana-3b07552aa/",
  },
  {
    name: "Samarveer Panag",
    title: "Researcher",
    photo: "/headshots/team/Samarveer-Panag.jpeg",
    linkedin: "https://www.linkedin.com/in/samarveerpanag/",
  },
  {
    name: "Anay Gujrathi",
    title: "Researcher",
    photo: "/headshots/team/Anay-Gujrathi.jpeg",
    linkedin: "https://www.linkedin.com/in/anay-gujrathi-1b5995265/",
  },
];

export default function TeamPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="section-head reveal">
          <h1>Our Team</h1>
          <p>
            Connect with our team and explore their professional profiles.
          </p>
        </div>

        <section className="team-grid">
          {teamMembers.map((member) => (
            <article key={member.name} className="team-card reveal">
              <img
                src={member.photo}
                alt={member.name}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "/headshots/team/placeholder.svg";
                }}
              />
              <div className="team-card-body">
                <h3>{member.name}</h3>
                <p>{member.title}</p>
              </div>
              <a
                className="team-overlay"
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={`${member.name} LinkedIn`}
              >
                <img src="/icons/linkedin.svg" alt="LinkedIn" />
              </a>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
