"use client";

import { RiMenu5Fill } from "react-icons/ri";
import { MdEmail, MdHome } from "react-icons/md";
import { LuLink } from "react-icons/lu";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./Logo";

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild className="order-2 md:order-1">
        <Button
          variant="ghost"
          className="h-auto bg-transparent p-0 hover:bg-transparent"
        >
          <RiMenu5Fill className="h-[50px] w-[50px]" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="flex w-2/3 flex-col gap-0 border-r-gray-500 bg-black px-[36px] py-[60px] md:w-[384px]"
      >
        <Logo className="mb-[90px]" />

        <Link href="/" className="mb-[36px] flex items-center gap-[14px]">
          <MdHome className="h-[28px] w-[28px] text-[#9F9F9F]" />
          <span className="bg-[linear-gradient(95.89deg,_#FFFFFF_0%,_#8A2BE2_33.92%,_#2898FF_55.56%,_#FFFFFF_98.33%)] bg-clip-text text-[25px] font-semibold text-transparent">
            Home
          </span>
        </Link>
        <Link href="/create" className="mb-[36px] flex items-center gap-[14px]">
          <LuLink className="h-[28px] w-[28px] text-[#9F9F9F]" />
          <span className="bg-[linear-gradient(95.89deg,_#FFFFFF_0%,_#8A2BE2_33.92%,_#2898FF_55.56%,_#FFFFFF_98.33%)] bg-clip-text text-[25px] font-semibold text-transparent">
            New Link
          </span>
        </Link>
        <Link
          href="/contact"
          className="mb-[36px] flex items-center gap-[14px]"
        >
          <MdEmail className="h-[28px] w-[28px] text-[#9F9F9F]" />
          <span className="bg-[linear-gradient(95.89deg,_#FFFFFF_0%,_#8A2BE2_33.92%,_#2898FF_55.56%,_#FFFFFF_98.33%)] bg-clip-text text-[25px] font-semibold text-transparent">
            Contact
          </span>
        </Link>
      </SheetContent>
    </Sheet>
  );
}
