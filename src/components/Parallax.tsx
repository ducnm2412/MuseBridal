"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Parallax nhẹ: phần tử có data-parallax="0.12" (tỉ lệ) sẽ dịch theo vị trí
 * so với tâm màn hình. Ảnh bên trong được phóng sẵn 12% để không hở mép.
 */
export default function Parallax() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    if (!els.length) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      for (const el of els) {
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) continue;
        const ratio = parseFloat(el.dataset.parallax || "0.12");
        const center = r.top + r.height / 2 - vh / 2;
        el.style.setProperty("--py", `${(-center * ratio).toFixed(1)}px`);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}
