import { Quote } from "lucide-react";
import Link from "next/link";
import {
  Github,
  Twitter,
  Linkedin,
  Home,
  User,
  Mail,
  Share,
  BookOpen,
} from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Emma-moren",
      label: "GitHub",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/pino_moren99",
      label: "x",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/emmanuel-irimoren-20b97b320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-[#F4EFEC] py-8">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex justify-center gap-4 mb-6">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-white/60 hover:text-[#222] transition-colors p-2 rounded-full hover:bg-white/5"
              aria-label={link.label}
            >
              {link.icon}
            </Link>
          ))}
        </div>

        <p className="text-[#000]/60 pt-2 text-center text-2xl">
          © 2025 Emmanuel Irimoren. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
