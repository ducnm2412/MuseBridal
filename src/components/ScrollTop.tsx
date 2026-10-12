"use client";

import { ArrowUpIcon } from "@phosphor-icons/react";
import { useScrolledPast } from "@/lib/useScrolledPast";

/** Nút cuộn lên đầu trang, nằm cùng cột với các nút liên hệ nhanh. Hiện khi đã cuộn qua 300px. */
export default function ScrollTop() {
  const show = useScrolledPast(300);

  return (
    <button
      type="button"
      aria-label="Lên đầu trang"
      title="Lên đầu trang"
      tabIndex={show ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`h-12 w-12 rounded-full border border-ink/30 bg-cream/90 text-ink backdrop-blur flex items-center justify-center shadow-[0_6px_20px_rgba(43,33,28,0.15)] transition-[opacity,transform] duration-500 ${
        show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"
      }`}
    >
      <ArrowUpIcon size={20} weight="light" aria-hidden="true" />
    </button>
  );
}
