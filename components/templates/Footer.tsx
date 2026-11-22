import Link from "next/link";
import {
  SiGithub,
  SiLinkedin,
  SiTelegram,
  SiInstagram,
} from "react-icons/si";
import { FiArrowUp } from "react-icons/fi";

const socials = [
  { icon: SiGithub, href: "https://github.com/MersadHabibi", label: "GitHub" },
  {
    icon: SiLinkedin,
    href: "https://www.linkedin.com/in/mersad-habibi-b2701b2bb/",
    label: "LinkedIn",
  },
  {
    icon: SiInstagram,
    href: "https://www.instagram.com/mersadhabibii",
    label: "Instagram",
  },
  { icon: SiTelegram, href: "https://t.me/MersadHabibi", label: "Telegram" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="container py-14">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-start">
          <div className="text-center lg:text-left">
            <Link
              href="#home"
              className="inline-flex items-center gap-2 font-display text-2xl font-bold text-white">
              <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-accent to-cyan-neon text-sm text-white">
                MH
              </span>
              Mersad Habibi
            </Link>
            <p className="mt-3 max-w-xs text-sm text-gray-500">
              Software engineer building web applications and designing products.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 lg:items-end">
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  aria-label={s.label}
                  className="grid size-11 place-items-center rounded-xl glass glass-hover text-lg text-gray-400 transition-colors hover:text-accent-soft">
                  <s.icon />
                </Link>
              ))}
            </div>
            <a
              href="mailto:mersadhabibi.work@gmail.com"
              className="text-sm text-gray-400 transition-colors hover:text-white">
              mersadhabibi.work@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Mersad Habibi. All rights reserved.
          </p>
          <Link
            href="#home"
            className="group flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white">
            Back to top
            <span className="grid size-8 place-items-center rounded-lg glass transition-transform group-hover:-translate-y-1">
              <FiArrowUp />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
