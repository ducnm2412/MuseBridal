"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/data";

const nav = [
  { href: "/album", label: "Album" },
  { href: "/dich-vu", label: "Dịch vụ" },
  { href: "/bang-gia", label: "Bảng giá" },
  { href: "/lien-he", label: "Liên hệ" },
];

/**
 * Header cố định. Ở trang chủ nó trong suốt nổi trên hero, chuyển sang nền kem
 * khi cuộn xuống. Ở trang khác luôn có nền và chừa chỗ phía trên nội dung.
 */
export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Đóng menu khi đổi trang: theo dõi pathname trong lúc render thay vì effect
  const [seenPath, setSeenPath] = useState(pathname);
  if (seenPath !== pathname) {
    setSeenPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const transparent = isHome && !scrolled && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
          transparent
            ? "bg-transparent text-ink"
            : "bg-cream/90 text-ink backdrop-blur border-b border-line"
        }`}
      >
        <div className="mx-auto flex h-16 md:h-20 max-w-6xl items-center justify-between px-4 md:px-6">
          <Link
            href="/"
            aria-label={
              isHome
                ? "Muse Bridal, lên đầu trang"
                : "Muse Bridal, về trang chủ"
            }
            className="flex items-center"
            onClick={(e) => {
              // Đang ở trang chủ: cuộn mượt lên đầu thay vì tải lại trang
              if (isHome) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <Image
              src="/brand/logo-brown.png"
              alt="Muse Bridal"
              width={1200}
              height={600}
              priority
              className="h-9 md:h-10 w-auto"
            />
          </Link>

          <nav
            aria-label="Chính"
            className="hidden md:flex items-center gap-8 text-sm"
          >
            {nav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`pb-0.5 border-b transition-colors ${
                    active
                      ? "border-current"
                      : "border-transparent hover:border-current"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/lien-he#dat-lich"
              className="btn btn-primary min-h-10 px-5 py-2 text-sm"
            >
              Đặt lịch chụp
            </Link>
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Đóng menu" : "Mở menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 top-0 h-px w-6 bg-current transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-px w-6 bg-current transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-px w-6 bg-current transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>
      {open && (
        <div
          id="menu-mobile"
          className="md:hidden fixed inset-x-0 top-16 bottom-0 z-50 bg-cream text-ink flex flex-col px-6 pt-6 pb-10 overflow-y-auto"
        >
          <nav aria-label="Chính, di động" className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="display text-4xl py-3 border-b border-line"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3">
            <Link href="/lien-he#dat-lich" className="btn btn-primary">
              Đặt lịch chụp
            </Link>
            <a href={site.phoneHref} className="btn btn-outline">
              Gọi {site.phone}
            </a>
          </div>
        </div>
      )}
      {!isHome && <div aria-hidden="true" className="h-16 md:h-20" />}
    </>
  );
}
