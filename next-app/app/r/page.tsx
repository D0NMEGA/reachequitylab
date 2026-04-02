import type { Metadata } from "next";
import { RecruitmentPage } from "@/components/RecruitmentPage";

export const metadata: Metadata = {
  title: "REACH Equity Lab | Application Update",
  robots: "noindex, nofollow",
};

export default function RPage() {
  return <RecruitmentPage />;
}
