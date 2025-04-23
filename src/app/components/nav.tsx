"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Share, BookOpen } from "lucide-react";
import { cn } from "../lib/utils";

export function Nav() {
  const pathname = typeof window !== "undefined" ? usePathname() : "";

  const navLinks = [
    { icon: <Home className="w-5 h-5" />, href: "#header", label: "Home" },
    { icon: <User className="w-5 h-5" />, href: "#about", label: "About" },
    {
      icon: <Share className="w-5 h-5" />,
      href: "#skills",
      label: "Skills",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      href: "#projects",
      label: "Projects",
    },
  ];

  return (
    <div className="fixed left-0 bottom-20 w-full flex justify-center z-50 pb-2">
      <nav className="flex items-center gap-4 px-6 py-3 rounded-full bg-[#de7a0b] shadow-lg border border-white/10 opacity-90">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "p-2 rounded-full transition-all duration-300",
              "hover:bg-white/5 hover:text-[#000]",
              "text-white/60",
              pathname === link.href && "text-[#000 ] bg-[#000]/5"
            )}
            aria-label={link.label}
          >
            {link.icon}
          </Link>
        ))}
      </nav>
    </div>
  );
}
