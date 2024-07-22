import { Metadata } from "next";

import Create from "@/components/create";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Create`,
  description: `${SITE_TITLE} - Create`
};

export default function CreatePage() {
  return <Create />;
}
