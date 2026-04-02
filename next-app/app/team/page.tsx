import type { Metadata } from "next";
import { TeamGrid } from "./TeamGrid";

export const metadata: Metadata = {
  title: "Team | REACH Equity Lab",
  description:
    "Meet the undergraduate researchers behind REACH Equity Lab — founders, co-founders, and research team.",
  openGraph: {
    title: "Team | REACH Equity Lab",
    description:
      "Meet the undergraduate researchers behind REACH Equity Lab — founders, co-founders, and research team.",
    url: "https://reachequitylab.org/team",
    type: "website",
    images: [{ url: "/reach-banner.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Team | REACH Equity Lab",
    description:
      "Meet the undergraduate researchers behind REACH Equity Lab — founders, co-founders, and research team.",
    images: ["/reach-banner.png"],
  },
};

export default function TeamPage() {
  return <TeamGrid />;
}
