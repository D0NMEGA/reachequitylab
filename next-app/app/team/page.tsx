"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { StaggerContainer } from "@/components/StaggerContainer";
import { StaggerItem } from "@/components/StaggerItem";
import { Card, CardContent } from "@/components/ui/card";

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
    <main className="py-[84px]">
      <div className="w-[min(1120px,92vw)] mx-auto">
        <FadeIn className="text-center mb-7">
          <h1 className="text-[#1f3a5f] font-bold text-[clamp(2rem,5vw,3.4rem)] leading-tight mt-0">
            Our Team
          </h1>
          <p className="text-[#4a4a4a]">
            Connect with our team and explore their professional profiles.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[22px]">
          {teamMembers.map((member) => (
            <StaggerItem key={member.name}>
              <motion.div whileHover={{ y: -4, transition: { duration: 0.22 } }}>
                <Card className="relative overflow-hidden group">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full aspect-square object-cover block bg-[#eef5ff]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "/headshots/team/placeholder.svg";
                    }}
                  />
                  <CardContent className="p-3">
                    <h3 className="m-0 text-[1.05rem] font-medium text-[#2c4a73] leading-tight">
                      {member.name}
                    </h3>
                    <p className="mt-1.5 mb-0 text-[#4a4a4a] text-[0.92rem]">
                      {member.title}
                    </p>
                  </CardContent>
                  <a
                    className="absolute inset-0 grid place-items-center bg-[rgba(17,59,120,0.72)] opacity-0 transition-opacity duration-[220ms] group-hover:opacity-100 group-focus-within:opacity-100"
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <img
                      src="/icons/linkedin.svg"
                      alt="LinkedIn"
                      className="w-[54px] h-[54px]"
                    />
                  </a>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </main>
  );
}
