"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LuPlus } from "react-icons/lu";

import Sidebar from "./Sidebar";
import Logo from "./Logo";

export default function Header() {
  const pathName = usePathname();

  return (
    <header className="fixed z-50 flex w-full items-center justify-between bg-[linear-gradient(180deg,_#000000_60.74%,_#00000000_109.82%)] px-10 py-5">
      <Sidebar />

      {pathName === "/create" ? (
        <div className="order-1 md:order-2" />
      ) : (
        <Logo className="order-1 md:order-2" />
      )}

      {pathName === "/create" || pathName === "/result" ? (
        <div className="order-3 hidden md:block" />
      ) : (
        <Link
          href="/create"
          className="order-3 hidden h-auto items-center gap-[12px] rounded-md border border-white px-6 py-2 leading-9 md:flex"
        >
          <LuPlus className="h-5 w-5" />
          <span className="text-[30px] font-normal">New</span>
        </Link>
      )}
    </header>
  );
}
