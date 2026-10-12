"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/** Màn hình tải trang: logo hiện trên nền kem rồi mờ dần. */
export default function Preloader() {
  const [phase, setPhase] = useState<"show" | "hide" | "gone">("show");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t1 = setTimeout(() => setPhase("hide"), reduce ? 0 : 900);
    const t2 = setTimeout(() => setPhase("gone"), reduce ? 0 : 1600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-cream transition-opacity duration-700 ${
        phase === "hide" ? "opacity-0" : "opacity-100"
      }`}
    >
      <Image
        src="/brand/logo-brown.png"
        alt=""
        width={1200}
        height={600}
        priority
        className="preloader-logo h-14 w-auto md:h-20"
      />
    </div>
  );
}
