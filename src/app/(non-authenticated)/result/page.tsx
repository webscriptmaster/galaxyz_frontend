import { Metadata } from "next";

import Result from "@/components/result";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Result`,
  description: `${SITE_TITLE} - Result`
};

export default function ResultPage() {
  return <Result />;
}
