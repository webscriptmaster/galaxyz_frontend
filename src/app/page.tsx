import { Metadata } from "next";

import Home from "@/components/home";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Home`,
  description: `${SITE_TITLE} - Home`
};

export default function HomePage() {
  return <Home />;
}
