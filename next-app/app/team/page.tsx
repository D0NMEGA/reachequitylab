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
    bio: "Vibhu founded REACH Equity Lab to create a dedicated space for undergraduate health disparities research. He leads the lab's strategic direction and oversees all active research projects.",
    field: "Public Health & Policy, UT Austin",
  },
  {
    name: "Donovan Santine",
    title: "Co-Founder",
    photo: "/headshots/team/Donovan-Santine.jpg",
    linkedin: "https://www.linkedin.com/in/donovan-santine/",
    bio: "Donovan co-founded REACH Equity Lab and contributes to research design and the translation of findings into actionable policy recommendations.",
    field: "Health & Society, UT Austin",
  },
  {
    name: "Karthik Peravali",
    title: "Co-Founder",
    photo: "/headshots/team/Karthik-Peravali.jpg",
    linkedin: "https://www.linkedin.com/in/karthik-peravali-662917248/",
    bio: "Karthik co-founded REACH Equity Lab and helps drive research direction, team development, and community engagement strategy.",
    field: "Biochemistry, UT Austin",
  },
  {
    name: "Aryan Roghani",
    title: "Researcher",
    photo: "/headshots/team/Aryan-Kia-Roghani.jpeg",
    linkedin: "https://www.linkedin.com/in/aryankiaroghani/",
    bio: "Aryan contributes to data analysis and quantitative research examining health disparities across racial and socioeconomic groups.",
    field: "Statistics & Data Science, UT Austin",
  },
  {
    name: "Arjun Jaana",
    title: "Researcher",
    photo: "/headshots/team/Arjun-Jaana.jpg",
    linkedin: "https://www.linkedin.com/in/arjun-jaana-3b07552aa/",
    bio: "Arjun supports the lab's research on health outcomes and helps analyze the relationship between financial barriers and care access.",
    field: "Neuroscience, UT Austin",
  },
  {
    name: "Samarveer Panag",
    title: "Researcher",
    photo: "/headshots/team/Samarveer-Panag.jpeg",
    linkedin: "https://www.linkedin.com/in/samarveerpanag/",
    bio: "Samarveer contributes to epidemiologic research methods and assists with dataset preparation and findings communication.",
    field: "Biology, UT Austin",
  },
  {
    name: "Anay Gujrathi",
    title: "Researcher",
    photo: "/headshots/team/Anay-Gujrathi.jpeg",
    linkedin: "https://www.linkedin.com/in/anay-gujrathi-1b5995265/",
    bio: "Anay contributes to research on health disparities and supports the lab's efforts to connect evidence-based findings with community impact.",
    field: "Pharmacy, UT Austin",
  },
];

export default function TeamPage() {
  return (
    <main className="py-[84px]">
      <div className="w-[min(1120px,92vw)] mx-auto">
        <FadeIn className="text-center mb-10">
          <h1 className="text-[#1f3a5f] font-bold text-[clamp(2rem,5vw,3.4rem)] leading-tight mt-0">
            Our Team
          </h1>
          <p className="text-[#4a4a4a] max-w-[52ch] mx-auto">
            Undergraduate researchers at The University of Texas at Austin
            dedicated to health equity and evidence-driven analysis.
          </p>
        </FadeIn>

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {teamMembers.map((member) => (
            <StaggerItem key={member.name}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.22 } }}
                className="h-full"
              >
                <Card className="relative overflow-hidden group flex flex-col h-full">
                  {/* Photo */}
                  <div className="relative overflow-hidden">
                    <img
                      src={member.photo}
                      alt={`Headshot of ${member.name}`}
                      className="w-full aspect-[4/5] object-cover object-top block bg-[#eef5ff]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "/headshots/team/placeholder.svg";
                      }}
                    />
                    {/* LinkedIn hover overlay */}
                    <a
                      className="absolute inset-0 grid place-items-center bg-[rgba(17,59,120,0.72)] opacity-0 transition-opacity duration-[220ms] group-hover:opacity-100 group-focus-within:opacity-100"
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <img
                        src="/icons/linkedin.svg"
                        alt="LinkedIn"
                        className="w-[54px] h-[54px]"
                      />
                    </a>
                  </div>

                  {/* Card body */}
                  <CardContent className="p-5 flex flex-col gap-2 flex-1">
                    <div>
                      <h3 className="m-0 text-[1.1rem] font-semibold text-[#1f3a5f] leading-tight">
                        {member.name}
                      </h3>
                      <p className="mt-1 mb-0 text-[#3ba99c] text-[0.88rem] font-medium">
                        {member.title}
                      </p>
                    </div>
                    <p className="text-[#6b7280] text-[0.8rem] m-0 flex items-center gap-1">
                      <span aria-hidden="true">📍</span>
                      {member.field}
                    </p>
                    <p className="text-[#4a4a4a] text-[0.9rem] leading-relaxed m-0 flex-1">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </main>
  );
}
