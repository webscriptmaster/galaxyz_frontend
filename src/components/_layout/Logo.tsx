"use client";

import Image from "next/image";
import Link from "next/link";

interface Props {
  className?: string;
}

export default function Logo({ className = "" }: Props) {
  return (
    <Link href="/" className={className}>
      <Image src="/logo.svg" alt="Logo" width={190} height={28} />
    </Link>
  );
}
